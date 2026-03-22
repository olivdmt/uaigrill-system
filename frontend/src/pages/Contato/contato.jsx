import { Link } from 'react-router-dom';
import styles from './contato.module.css';
import logo from '../../assets/logoUaiGrill-01.png'

function Contato() {
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
            <i className='fa-solid fa-cart-arrow-down'></i>
          </Link>
        </section>
      </header>

      {/* HERO */}
      <section className={styles.heroSection}>
        <h1>Entre em Contato</h1>
        <p>
          Fale com a UaiGrill, tire suas dúvidas, faça sugestões ou solicite
          informações sobre pedidos, delivery e atendimento.
        </p>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <section className={styles.contactSection}>
        <div className={styles.infoColumn}>
          <h2>Informações</h2>

          <div className={styles.infoCard}>
            <h3>Endereço</h3>
            <p>📍 Rua Exemplo, 123 - Centro</p>
            <p>Itutinga - MG</p>
          </div>

          <div className={styles.infoCard}>
            <h3>Telefone</h3>
            <p>📞 (35) 99999-9999</p>
          </div>

          <div className={styles.infoCard}>
            <h3>WhatsApp</h3>
            <p>💬 (35) 99999-9999</p>
          </div>

          <div className={styles.infoCard}>
            <h3>Instagram</h3>
            <p>📷 @uaigrill</p>
          </div>

          <div className={styles.infoCard}>
            <h3>Horário de Funcionamento</h3>
            <p>Segunda a Domingo</p>
            <p>18h às 00h</p>
          </div>
        </div>

        <div className={styles.formColumn}>
          <h2>Envie sua mensagem</h2>

          <form className={styles.contactForm}>
            <input type="text" placeholder="Seu nome" />
            <input type="email" placeholder="Seu e-mail" />
            <input type="text" placeholder="Seu telefone" />
            <input type="text" placeholder="Assunto" />
            <textarea
              placeholder="Digite sua mensagem..."
              rows="6"
            ></textarea>

            <button type="submit">Enviar mensagem</button>
          </form>
        </div>
      </section>

      {/* MAPA / LOCALIZAÇÃO */}
      <section className={styles.mapSection}>
        <h2>Onde Estamos</h2>
        <div className={styles.mapBox}>
          <p>Mapa / localização do restaurante</p>
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

export default Contato;