import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './checkout.module.css';
import logo from '../../assets/logoUaiGrill-01.png';
import { useCart } from '../../context/CartContext';
import { pedidoService } from '../../services/pedidoService'; // ADICIONADO
import toast from 'react-hot-toast';

function Checkout() {
  const { cart, subtotal, limparCarrinho } = useCart();
  const navigate = useNavigate();

  const [metodoEntrega, setMetodoEntrega] = useState('Delivery');
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    endereco: '',
    pagamento: 'Pix'
  });

  const taxaEntrega = metodoEntrega === 'Delivery' ? 8.00 : 0;
  const totalGeral = subtotal + taxaEntrega;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // FUNÇÃO ÚNICA E CORRIGIDA
  const finalizarPedidoOficial = async (e) => {
    if (e) e.preventDefault();

    // Validações básicas
    if (!formData.nome || !formData.telefone) {
      return toast.error("Por favor, preencha nome e telefone!");
    }

    if (metodoEntrega === 'Delivery' && !formData.endereco) {
      return toast.error("Endereço é obrigatório para Delivery!");
    }

    try {
      await toast.promise(
        pedidoService.criarPedido({
          itens: cart.map(item => ({ id: item.id, quantidade: item.quantidade })),
          nome: formData.nome,
          telefone: formData.telefone,
          endereco: metodoEntrega === 'Delivery' ? formData.endereco : 'Retirada no Local',
          pagamento: formData.pagamento, // Corrigido de metodoPagamento para formData.pagamento
          total: totalGeral
        }),
        {
          loading: 'Enviando seu pedido para a brasa... 🔥',
          success: (res) => {
            limparCarrinho(); 
            setTimeout(() => {
              navigate('/'); // Ou para a página de sucesso que você criar
            }, 3000);
            return 'Pedido confirmado! Bom apetite! 🍔';
          },
          error: (err) => `Erro ao processar: ${err.message || 'Falha na conexão'}`
        }
      );
    } catch (error) {
      console.error("Erro no checkout:", error);
    }
  };

  return (
    <div className={styles.container}>
      {/* NAVBAR */}
      <header className={styles.header}>
        <section className={styles.navbar}>
          <div className={styles.logoArea}>
            <img src={logo} alt="Logo UaiGrill" />
            <div>
              <h2>UaiGrill</h2>
              <span>Sabor, rapidez e experiência</span>
            </div>
          </div>
          <ul className={styles.navLinks}>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/menu">Cardápio</Link></li>
            <li><Link to="/contact">Contato</Link></li>
          </ul>
          <Link to="/carrinho" className={styles.cartButton}>
            Carrinho ({cart.length})
          </Link>
        </section>
      </header>

      <section className={styles.checkoutSection}>
        <div className={styles.formBox}>
          <h2>Dados do Cliente</h2>
          <form className={styles.checkoutForm} onSubmit={finalizarPedidoOficial}>
            <div className={styles.inputGroup}>
              <input name="nome" type="text" placeholder="Nome completo" onChange={handleInputChange} required />
              <input name="telefone" type="text" placeholder="Telefone" onChange={handleInputChange} required />
            </div>

            <h3>Forma de Recebimento</h3>
            <div className={styles.optionGrid}>
              {['Delivery', 'Retirada', 'Restaurante'].map(op => (
                <label key={op} className={styles.optionCard}>
                  <input 
                    type="radio" 
                    name="entrega" 
                    checked={metodoEntrega === op} 
                    onChange={() => setMetodoEntrega(op)} 
                  />
                  <span>{op}</span>
                </label>
              ))}
            </div>

            {metodoEntrega === 'Delivery' && (
              <div className={styles.addressArea}>
                <h3>Endereço de Entrega</h3>
                <input name="endereco" type="text" placeholder="Rua, número, bairro..." onChange={handleInputChange} className={styles.fullInput} required />
              </div>
            )}

            <h3>Forma de Pagamento</h3>
            <div className={styles.optionGrid}>
              {['Pix', 'Cartão', 'Dinheiro'].map(pg => (
                <label key={pg} className={styles.optionCard}>
                  <input 
                    type="radio" 
                    name="pagamento" 
                    checked={formData.pagamento === pg} 
                    onChange={() => setFormData({...formData, pagamento: pg})} 
                  />
                  <span>{pg}</span>
                </label>
              ))}
            </div>
          </form>
        </div>

        <div className={styles.summaryBox}>
          <h2>Resumo do Pedido</h2>
          <div className={styles.itemsList}>
            {cart.map(item => (
              <div key={item.id} className={styles.orderItem}>
                <div>
                  <h4>{item.nome}</h4>
                  <p>Qtd: {item.quantidade}</p>
                </div>
                <span>R$ {(item.preco * item.quantidade).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className={styles.summaryRow}>
            <span>Subtotal</span>
            <span>R$ {subtotal.toFixed(2)}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Taxa ({metodoEntrega})</span>
            <span>R$ {taxaEntrega.toFixed(2)}</span>
          </div>
          <div className={styles.totalRow}>
            <span>Total</span>
            <span>R$ {totalGeral.toFixed(2)}</span>
          </div>

          <button onClick={finalizarPedidoOficial} className={styles.finishBtn}>
            Confirmar Pedido
          </button>
        </div>
      </section>
    </div>
  );
}

export default Checkout;