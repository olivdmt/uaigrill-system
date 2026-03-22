import { Link, useNavigate } from 'react-router-dom';
import styles from './carrinho.module.css';
import logo from '../../assets/logoUaiGrill-01.png';
import { useCart } from '../../context/CartContext'; 
import { useState, useEffect} from 'react';
import toast from 'react-hot-toast'
import { pedidoService} from '../../services/pedidoService';


function Carrinho() {

  const navigate = useNavigate();
  // Extraímos todas as funções necessárias do nosso Contexto
  const { cart, addToCart, subtotal, decreaseQuantity, limparCarrinho } = useCart();

  const [cupomDigitado, setCupomDigitado] = useState('');
  const [desconto, setDesconto] = useState(0);
  
  const taxaEntrega = cart.length > 0 ? 8.00: 0;
  const total = subtotal + taxaEntrega - desconto;

  const handleAplicarCupom = () => {
    if (cupomDigitado.toUpperCase() === 'UAIGRILL10') {
      const valorDesconto = subtotal * 0.10;
      toast.success("Cupom UAIGRILL10 aplicado")
      setDesconto(valorDesconto);
    }else {
      toast.error("Cupom inválido!");
      setDesconto(0);
    }
  };


  const handleFinalizarPedido = async () => {
    if (cart.length === 0) return toast.error("Seu carrinho está vazio!");

    const dadosDoPedido = {
      itens: cart.map(item => ({
        id: item.id,
        quantidade: item.quantidade
      })),
      cupomCodigo: desconto > 0 ? cupomDigitado.toUpperCase() : null,
      entrega: taxaEntrega,
      total: total
    };

    try {
      await toast.promise(
        pedidoService.criarPedido(dadosDoPedido),
        {
          loading: 'Enviando pedido para a cozinha...',
          success: (res) => {
            limparCarrinho(); // Limpa o 'balde  global após sucesso
            setTimeout(() => navigate('/'), 3000); // Volta para o ínicio após 3s
            return 'Pedido realizado com sucesso! Bom apetite!';
          },
          error: (err) => `Erro ao processar: ${err}`
        }
      );
    } catch (error) {
      console.log("Erro no checkout: ", error)
    }
  }
  
  
  return (
    <div className={styles.container}>
      {/* NAVBAR */}
      <header className={styles.header}>
        <section className={styles.navbar}>
          <div className={styles.logoArea}>
            <img src={logo} alt="Logo marca UaiGrill" />
            <div>
              <h2>UaiGrill</h2>
              <span>Sabor, rapidez e experiência</span>
            </div>
          </div>

          <ul className={styles.navLinks}>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/menu">Cardápio</Link></li>
            <li><Link to="/promocoes">Promoções</Link></li>
            <li><Link to="/contact">Contato</Link></li>
          </ul>

          <Link to="/carrinho" className={styles.cartButton}>
            Carrinho ({cart.length})
          </Link>
        </section>
      </header>

      {/* HERO */}
      <section className={styles.heroSection}>
        <h1>Seu Carrinho</h1>
        <p>
          Revise seus itens, ajuste quantidades e finalize seu pedido com
          praticidade.
        </p>
      </section>

      {/* CONTEÚDO */}
      <section className={styles.cartSection}>
        {/* LISTA DE ITENS */}
        <div className={styles.cartItems}>
          <h2>Itens do Pedido</h2>

          {cart.length === 0 ? (
            <p className={styles.emptyMsg}>
              Seu carrinho está vazio. <Link to="/menu">Bora pedir?</Link>
            </p>
          ) : (
            cart.map((item) => (
              <div className={styles.cartCard} key={item.id}>
                <img src={item.imagem || "#"} alt={item.nome} />
                <div className={styles.itemInfo}>
                  <h3>{item.nome}</h3>
                  <p>{item.descricao}</p>
                  <span>R$ {Number(item.preco).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>

                <div className={styles.quantityBox}>
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantidade}</span>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
              </div>
            ))
          )}

          <div className={styles.actionsRow}>
            <Link to="/menu" className={styles.continueBtn}>
              Continuar comprando
            </Link>
          </div>
        </div>

        {/* RESUMO DO PEDIDO */}
        <div className={styles.summaryBox}>
          <h2>Resumo do Pedido</h2>

          <div className={styles.summaryRow}>
            <span>Subtotal</span>
            <span>R$ {subtotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
          </div>

          <div className={styles.summaryRow}>
            <span>Taxa de entrega</span>
            <span>R$ {taxaEntrega.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
          </div>

          <div className={styles.summaryRow}>
            <span>Desconto</span>
            <span>R$ {desconto.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
          </div>

          <div className={styles.totalRow}>
            <span>Total</span>
            <span>R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
          </div>

          <input
            type="text"
            placeholder="Cupom de desconto"
            className={styles.couponInput}
            onChange={(e) => setCupomDigitado(e.target.value)}
          />

          <button onClick={handleAplicarCupom} className={styles.couponBtn}>Aplicar cupom</button>

          <button onClick={() => navigate('/checkout')} className={styles.checkoutBtn} disabled={cart.length === 0}>
            Finalizar pedido
          </button>


        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <p>📍 Rua Exemplo, 123 - Centro</p>
        <p>📞 (35) 99999-9999</p>
        <p>📷 @uaigrill</p>
        <p>© 2026 UaiGrill - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default Carrinho;