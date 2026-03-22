async function createOrder(dadosPedido) {
    let subtotal = 0;
    const taxaEntrega = Number(dadosPedido.entrega) || 0;
    let valorDesconto = 0; // Começamos com zero e calculamos abaixo

    // 1. Loop para calcular o Subtotal Real do Banco
    for (const item of dadosPedido.itens) { 
        const produtoNoBanco = await Produto.findByPk(item.id);
        
        if (!produtoNoBanco || !produtoNoBanco.disponibilidade) {
            throw new Error(`Produto ${item.id} não disponível!`);
        }
        subtotal += Number(produtoNoBanco.preco) * item.quantidade;
    };

    // 2. Validação do Cupom (Antes de Salvar no Banco)
    if (dadosPedido.cupomCodigo) {
        const cupom = await Cupom.findOne({ 
            where: { codigo: dadosPedido.cupomCodigo } 
        });

        if (!cupom || !cupom.ativo || new Date(cupom.validade) < new Date()) {
            throw new Error("Cupom inválido ou expirado");
        }

        if (cupom.tipo === 'Percentual') {
            valorDesconto = subtotal * (Number(cupom.valor) / 100);
        } else {
            valorDesconto = Number(cupom.valor);
        }
    }

    // 3. Cálculo do Total Final Real
    const totalFinal = (subtotal + taxaEntrega) - valorDesconto;

    // 4. Agora sim, salvamos com os valores CALCULADOS PELO BACKEND
    const NovoPedido = await Pedido.create({
        itens: dadosPedido.itens,
        subtotal: subtotal,
        entrega: taxaEntrega,
        desconto: valorDesconto, // Valor validado pelo seu código
        total: totalFinal,      // Total à prova de fraudes
        status: 'Recebido'
    });

    return NovoPedido;
}

export default createOrder;