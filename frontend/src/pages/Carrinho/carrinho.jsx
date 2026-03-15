import { Link } from 'react-router-dom';
import styles from './carrinho.module.css';
import logo from '../../assets/logoUaiGrill-01.png'

function Carrinho() {
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
        <h1>Seu Carrinho</h1>
        <p>
          Revise seus itens, ajuste quantidades e finalize seu pedido com
          praticidade.
        </p>
      </section>

      {/* CONTEÚDO */}
      <section className={styles.cartSection}>
        {/* ITENS */}
        <div className={styles.cartItems}>
          <h2>Itens do Pedido</h2>

          <div className={styles.cartCard}>
            <img src="#" alt="X-Bacon" />
            <div className={styles.itemInfo}>
              <h3>X-Bacon</h3>
              <p>Hambúrguer, queijo, bacon crocante e molho especial.</p>
              <span>R$ 23,90</span>
            </div>

            <div className={styles.quantityBox}>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>

          <div className={styles.cartCard}>
            <img src="#" alt="Batata Cheddar e Bacon" />
            <div className={styles.itemInfo}>
              <h3>Batata Cheddar e Bacon</h3>
              <p>Batata frita com cheddar cremoso e bacon crocante.</p>
              <span>R$ 32,90</span>
            </div>

            <div className={styles.quantityBox}>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>

          <div className={styles.cartCard}>
            <img src="#" alt="Refrigerante 2L" />
            <div className={styles.itemInfo}>
              <h3>Refrigerante 2L</h3>
              <p>Ideal para acompanhar sua refeição em família.</p>
              <span>R$ 12,90</span>
            </div>

            <div className={styles.quantityBox}>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>

          <div className={styles.actionsRow}>
            <Link to="/menu" className={styles.continueBtn}>
              Continuar comprando
            </Link>
          </div>
        </div>

        {/* RESUMO */}
        <div className={styles.summaryBox}>
          <h2>Resumo do Pedido</h2>

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

          <input
            type="text"
            placeholder="Cupom de desconto"
            className={styles.couponInput}
          />

          <button className={styles.couponBtn}>Aplicar cupom</button>

          <Link to="/checkout" className={styles.checkoutBtn}>
            Finalizar pedido
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

export default Carrinho;