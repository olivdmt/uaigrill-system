import { Link } from 'react-router-dom';
import styles from './checkout.module.css';
import logo from '../../assets/logoUaiGrill-01.png';

function Checkout() {
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
            Carrinho
          </Link>
        </section>
      </header>

      {/* HERO */}
      <section className={styles.heroSection}>
        <h1>Finalizar Pedido</h1>
        <p>
          Preencha seus dados, escolha a forma de entrega e selecione o pagamento
          para concluir seu pedido.
        </p>
      </section>

      {/* CONTEÚDO */}
      <section className={styles.checkoutSection}>
        {/* FORMULÁRIO */}
        <div className={styles.formBox}>
          <h2>Dados do Cliente</h2>

          <form className={styles.checkoutForm}>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Nome completo" />
              <input type="text" placeholder="Telefone" />
            </div>

            <div className={styles.inputGroup}>
              <input type="email" placeholder="E-mail" />
              <input type="text" placeholder="CPF (opcional)" />
            </div>

            <h3>Forma de Recebimento</h3>
            <div className={styles.optionGrid}>
              <label className={styles.optionCard}>
                <input type="radio" name="entrega" />
                <span>Delivery</span>
              </label>

              <label className={styles.optionCard}>
                <input type="radio" name="entrega" />
                <span>Retirada no Local</span>
              </label>

              <label className={styles.optionCard}>
                <input type="radio" name="entrega" />
                <span>Consumir no Restaurante</span>
              </label>
            </div>

            <h3>Endereço de Entrega</h3>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Rua / Avenida" />
              <input type="text" placeholder="Número" />
            </div>

            <div className={styles.inputGroup}>
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Complemento" />
            </div>

            <div className={styles.inputGroup}>
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="CEP" />
            </div>

            <h3>Forma de Pagamento</h3>
            <div className={styles.optionGrid}>
              <label className={styles.optionCard}>
                <input type="radio" name="pagamento" />
                <span>Pix</span>
              </label>

              <label className={styles.optionCard}>
                <input type="radio" name="pagamento" />
                <span>Cartão</span>
              </label>

              <label className={styles.optionCard}>
                <input type="radio" name="pagamento" />
                <span>Dinheiro</span>
              </label>
            </div>

            <textarea
              placeholder="Observações do pedido (ex: sem cebola, ponto da carne, troco para...)"
              rows="5"
            ></textarea>
          </form>
        </div>

        {/* RESUMO */}
        <div className={styles.summaryBox}>
          <h2>Resumo do Pedido</h2>

          <div className={styles.orderItem}>
            <div>
              <h4>X-Bacon</h4>
              <p>Quantidade: 1</p>
            </div>
            <span>R$ 23,90</span>
          </div>

          <div className={styles.orderItem}>
            <div>
              <h4>Batata Cheddar e Bacon</h4>
              <p>Quantidade: 1</p>
            </div>
            <span>R$ 32,90</span>
          </div>

          <div className={styles.orderItem}>
            <div>
              <h4>Refrigerante 2L</h4>
              <p>Quantidade: 1</p>
            </div>
            <span>R$ 12,90</span>
          </div>

          <div className={styles.summaryRow}>
            <span>Subtotal</span>
            <span>R$ 69,70</span>
          </div>

          <div className={styles.summaryRow}>
            <span>Taxa de entrega</span>
            <span>R$ 8,00</span>
          </div>

          <div className={styles.summaryRow}>
            <span>Desconto</span>
            <span>- R$ 5,00</span>
          </div>

          <div className={styles.totalRow}>
            <span>Total</span>
            <span>R$ 72,70</span>
          </div>

          <Link to="/pedido-confirmado" className={styles.finishBtn}>
            Confirmar pedido
          </Link>

          <Link to="/carrinho" className={styles.backBtn}>
            Voltar ao carrinho
          </Link>
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

export default Checkout;