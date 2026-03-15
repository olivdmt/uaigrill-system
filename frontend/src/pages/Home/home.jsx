import { Link } from 'react-router-dom';
import styles from './home.module.css';

import logo from '../../assets/logoUaiGrill-01.png';

function Home() {
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
        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>Delivery • Retirada • Consumo no local</span>

          <h1>O melhor sabor na sua casa, com experiência de restaurante</h1>

          <p>
            Hambúrgueres artesanais, pizzas irresistíveis, porções caprichadas
            e bebidas geladas para pedir em casa, retirar no local ou aproveitar
            no restaurante.
          </p>

          <div className={styles.btnHero}>
            <Link to="/cardapio" className={styles.btnPrimary}>
              Ver cardápio
            </Link>

            <Link to="/carrinho" className={styles.btnSecondary}>
              Pedir agora
            </Link>
          </div>

          <div className={styles.heroInfo}>
            <div>
              <strong>+500</strong>
              <span>Pedidos entregues</span>
            </div>
            <div>
              <strong>4.9</strong>
              <span>Avaliação média</span>
            </div>
            <div>
              <strong>18h às 00h</strong>
              <span>Funcionamento diário</span>
            </div>
          </div>
        </div>
      </section>

      {/* BUSCA */}
      <section className={styles.searchSection}>
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Buscar lanches, pizzas, porções, bebidas..."
          />
          <button>Buscar</button>
        </div>
      </section>

      {/* CATEGORIAS */}
      <section id="cardapio" className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span>Categorias</span>
          <h2>Explore o nosso cardápio</h2>
          <p>Escolha sua categoria favorita e descubra os sabores da UaiGrill.</p>
        </div>

        <div className={styles.cardapioGrid}>
          <div className={styles.cardCardapio}>
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
              alt="Lanches"
            />
            <div className={styles.cardContent}>
              <h3>Lanches</h3>
              <p>Artesanais, suculentos e preparados na hora.</p>
            </div>
          </div>

          <div className={styles.cardCardapio}>
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
              alt="Pizzas"
            />
            <div className={styles.cardContent}>
              <h3>Pizzas</h3>
              <p>Massas saborosas com recheios irresistíveis.</p>
            </div>
          </div>

          <div className={styles.cardCardapio}>
            <img
              src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80"
              alt="Porções"
            />
            <div className={styles.cardContent}>
              <h3>Porções</h3>
              <p>Perfeitas para compartilhar em qualquer ocasião.</p>
            </div>
          </div>

          <div className={styles.cardCardapio}>
            <img
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80"
              alt="Bebidas e Drinks"
            />
            <div className={styles.cardContent}>
              <h3>Bebidas & Drinks</h3>
              <p>Opções geladas para acompanhar cada pedido.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIS PEDIDOS */}
      <section className={`${styles.sectionBlock} ${styles.softSection}`}>
        <div className={styles.sectionHeader}>
          <span>Destaques</span>
          <h2>Os mais pedidos da casa</h2>
          <p>Os queridinhos dos clientes em um só lugar.</p>
        </div>

        <div className={styles.ordersGrid}>
          <div className={styles.cardOrders}>
            <img
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80"
              alt="X-bacon egg"
            />
            <div className={styles.cardContent}>
              <h3>X-Bacon Egg</h3>
              <p>Pão macio, hambúrguer suculento, bacon crocante, queijo e ovo.</p>
              <span>R$ 25,00</span>
            </div>
          </div>

          <div className={styles.cardOrders}>
            <img
              src="https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=800&q=80"
              alt="Pizza Portuguesa"
            />
            <div className={styles.cardContent}>
              <h3>Pizza Portuguesa</h3>
              <p>Mussarela, presunto, ovos, cebola, azeitona e molho especial.</p>
              <span>R$ 70,00</span>
            </div>
          </div>

          <div className={styles.cardOrders}>
            <img
              src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80"
              alt="Porção de peixe com fritas"
            />
            <div className={styles.cardContent}>
              <h3>Peixe com Fritas</h3>
              <p>Porção generosa de peixe empanado com fritas crocantes.</p>
              <span>R$ 65,00</span>
            </div>
          </div>

          <div className={styles.cardOrders}>
            <img
              src="https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Torre de chopp"
            />
            <div className={styles.cardContent}>
              <h3>Torre de Chopp Funil</h3>
              <p>Ideal para compartilhar com os amigos em momentos especiais.</p>
              <span>R$ 26,00</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROMOÇÃO */}
      <section className={styles.sectionBlock}>
        <div className={styles.promotionCard}>
          <div className={styles.promotionText}>
            <span className={styles.promoTag}>Promoção da Semana</span>
            <h3>Combo Casal</h3>
            <h4>2 X-Tudo + Batata Frita + Refrigerante 2L</h4>
            <p>
              Perfeito para dividir e aproveitar uma refeição completa com muito
              sabor e excelente custo-benefício.
            </p>
          </div>

          <div className={styles.promoPriceArea}>
            <span className={styles.oldPrice}>de R$ 74,90</span>
            <strong>R$ 59,90</strong>
            <Link to="/promocoes" className={styles.btnPromo}>
              Aproveitar oferta
            </Link>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className={`${styles.sectionBlock} ${styles.aboutSection}`}>
        <div className={styles.sectionHeader}>
          <span>Quem somos</span>
          <h2>Sobre a UaiGrill</h2>
        </div>

        <div className={styles.aboutBox}>
          <p>
            A UaiGrill nasceu para oferecer sabor, qualidade e praticidade,
            reunindo os melhores lanches, pizzas, porções e bebidas em um só lugar.
            Nosso objetivo é proporcionar uma experiência rápida, saborosa e
            inesquecível para cada cliente.
          </p>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span>Vantagens</span>
          <h2>Nossos diferenciais</h2>
        </div>

        <div className={styles.differentialsGrid}>
          <div className={styles.differentialCard}>
            <h3>Entrega Rápida</h3>
            <p>Seu pedido chega quente, rápido e com toda praticidade.</p>
          </div>

          <div className={styles.differentialCard}>
            <h3>Ingredientes Frescos</h3>
            <p>Qualidade, sabor e consistência em cada preparo.</p>
          </div>

          <div className={styles.differentialCard}>
            <h3>Ambiente Agradável</h3>
            <p>Perfeito para quem deseja aproveitar no local com conforto.</p>
          </div>

          <div className={styles.differentialCard}>
            <h3>Pedido Fácil</h3>
            <p>Navegação simples para encontrar e pedir o que quiser.</p>
          </div>
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section className={`${styles.sectionBlock} ${styles.softSection}`}>
        <div className={styles.sectionHeader}>
          <span>Clientes</span>
          <h2>O que estão dizendo</h2>
        </div>

        <div className={styles.reviewsGrid}>
          <div className={styles.reviewCard}>
            <p>"Lanche muito saboroso e entrega super rápida!"</p>
            <span>★★★★★ • Carlos</span>
          </div>

          <div className={styles.reviewCard}>
            <p>"Pizza excelente, recheio caprichado e massa muito boa."</p>
            <span>★★★★★ • Mariana</span>
          </div>

          <div className={styles.reviewCard}>
            <p>"Atendimento ótimo e porções muito bem servidas."</p>
            <span>★★★★★ • Fernanda</span>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span>Seu pedido, do seu jeito</span>
          <h2>Como você prefere receber?</h2>
        </div>

        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Delivery</h3>
            <p>Receba no conforto da sua casa com agilidade.</p>
          </div>

          <div className={styles.serviceCard}>
            <h3>Retirada no Local</h3>
            <p>Peça online e retire no horário que preferir.</p>
          </div>

          <div className={styles.serviceCard}>
            <h3>Consumo no Restaurante</h3>
            <p>Aproveite uma experiência completa no nosso espaço.</p>
          </div>
        </div>
      </section>

      {/* HORÁRIO */}
      <section className={styles.sectionBlock}>
        <div className={styles.hoursBox}>
          <h2>Horário de Funcionamento</h2>
          <p>Segunda a Domingo: 18h às 00h</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div>
            <h3>UaiGrill</h3>
            <p>Sabor, qualidade e praticidade em cada pedido.</p>
          </div>

          <div>
            <h4>Contato</h4>
            <p>📍 Rua Exemplo, 123 - Centro</p>
            <p>📞 (35) 99999-9999</p>
            <p>📷 @uaigrill</p>
          </div>

          <div>
            <h4>Atendimento</h4>
            <p>Segunda a Domingo</p>
            <p>18h às 00h</p>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© 2026 UaiGrill - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;