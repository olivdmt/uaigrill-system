import { Link } from 'react-router-dom';
import styles from './promocoes.module.css';
import logo from '../../assets/logoUaiGrill-01.png';

function Promocoes() {
  return (
    <div className={styles.container}>
      {/* HEADER */}
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
          <span className={styles.heroBadge}>Ofertas por tempo limitado</span>
          <h1>Promoções Especiais</h1>
          <p>
            Aproveite nossas ofertas da semana, combos exclusivos e preços
            especiais para deixar seu pedido ainda melhor.
          </p>
        </div>
      </section>

      {/* INFO BAR */}
      <section className={styles.infoBarWrapper}>
        <div className={styles.infoBar}>
          <div className={styles.infoItem}>🔥 Ofertas limitadas</div>
          <div className={styles.infoItem}>🚚 Delivery rápido</div>
          <div className={styles.infoItem}>💰 Combos com desconto</div>
          <div className={styles.infoItem}>⭐ Mais pedidos da casa</div>
        </div>
      </section>

      {/* DESTAQUES */}
      <section className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span>Destaques</span>
          <h2>Promoções da semana</h2>
          <p>As ofertas mais procuradas para aproveitar mais sabor pagando menos.</p>
        </div>

        <div className={styles.highlightGrid}>
          <div className={styles.highlightCard}>
            <div className={styles.badge}>Mais pedido</div>
            <img
              src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Combo Casal"
            />
            <div className={styles.cardContent}>
              <h3>Combo Casal</h3>
              <p>
                2 X-Tudo + batata frita + refrigerante 2L para dividir e
                aproveitar.
              </p>

              <div className={styles.priceRow}>
                <span className={styles.oldPrice}>R$ 72,90</span>
                <span className={styles.newPrice}>R$ 59,90</span>
              </div>

              <button>Adicionar ao carrinho</button>
            </div>
          </div>

          <div className={styles.highlightCard}>
            <div className={styles.badge}>Oferta</div>
            <img
              src="https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Pizza em Dobro"
            />
            <div className={styles.cardContent}>
              <h3>Pizza em Dobro</h3>
              <p>
                Na compra de 2 pizzas grandes, ganhe desconto especial no valor
                final.
              </p>

              <div className={styles.priceRow}>
                <span className={styles.oldPrice}>R$ 119,80</span>
                <span className={styles.newPrice}>R$ 99,90</span>
              </div>

              <button>Adicionar ao carrinho</button>
            </div>
          </div>

          <div className={styles.highlightCard}>
            <div className={styles.badge}>Imperdível</div>
            <img
              src="https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Batata Suprema"
            />
            <div className={styles.cardContent}>
              <h3>Batata Suprema</h3>
              <p>
                Batata frita com cheddar, bacon crocante e molho especial da
                casa.
              </p>

              <div className={styles.priceRow}>
                <span className={styles.oldPrice}>R$ 39,90</span>
                <span className={styles.newPrice}>R$ 32,90</span>
              </div>

              <button>Adicionar ao carrinho</button>
            </div>
          </div>
        </div>
      </section>

      {/* COMBOS */}
      <section className={`${styles.sectionBlock} ${styles.softSection}`}>
        <div className={styles.sectionHeader}>
          <span>Combos</span>
          <h2>Combos promocionais</h2>
          <p>Opções pensadas para diferentes momentos, com economia e praticidade.</p>
        </div>

        <div className={styles.promoGrid}>
          <div className={styles.promoCard}>
            <img
              src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Combo Individual"
            />
            <div className={styles.promoContent}>
              <h3>Combo Individual</h3>
              <p>X-Burguer + fritas + refrigerante lata.</p>
              <span className={styles.oldPrice}>R$ 34,90</span>
              <span className={styles.newPrice}>R$ 27,90</span>
              <button>Adicionar ao carrinho</button>
            </div>
          </div>

          <div className={styles.promoCard}>
            <img
              src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Combo Casal Premium"
            />
            <div className={styles.promoContent}>
              <h3>Combo Casal Premium</h3>
              <p>2 lanches premium + porção + refrigerante 2L.</p>
              <span className={styles.oldPrice}>R$ 89,90</span>
              <span className={styles.newPrice}>R$ 74,90</span>
              <button>Adicionar ao carrinho</button>
            </div>
          </div>

          <div className={styles.promoCard}>
            <img
              src="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Combo Família"
            />
            <div className={styles.promoContent}>
              <h3>Combo Família</h3>
              <p>2 pizzas grandes + refrigerante 2L com valor promocional.</p>
              <span className={styles.oldPrice}>R$ 128,90</span>
              <span className={styles.newPrice}>R$ 109,90</span>
              <button>Adicionar ao carrinho</button>
            </div>
          </div>

          <div className={styles.promoCard}>
            <img
              src="https://images.pexels.com/photos/1269025/pexels-photo-1269025.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Combo Happy Hour"
            />
            <div className={styles.promoContent}>
              <h3>Combo Happy Hour</h3>
              <p>Porção especial + torre de chopp com preço reduzido.</p>
              <span className={styles.oldPrice}>R$ 59,90</span>
              <span className={styles.newPrice}>R$ 46,90</span>
              <button>Adicionar ao carrinho</button>
            </div>
          </div>
        </div>
      </section>

      {/* DRINKS */}
      <section className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <span>Drinks em oferta</span>
          <h2>Promoções para brindar</h2>
          <p>Bebidas especiais com preços promocionais para completar a experiência.</p>
        </div>

        <div className={styles.promoGrid}>
          <div className={styles.promoCard}>
            <img
              src="https://images.pexels.com/photos/1269025/pexels-photo-1269025.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Caipirinha em dobro"
            />
            <div className={styles.promoContent}>
              <h3>Caipirinha em Dobro</h3>
              <p>Peça 2 unidades com valor especial por tempo limitado.</p>
              <span className={styles.oldPrice}>R$ 33,80</span>
              <span className={styles.newPrice}>R$ 28,90</span>
              <button>Adicionar ao carrinho</button>
            </div>
          </div>

          <div className={styles.promoCard}>
            <img
              src="https://images.pexels.com/photos/5947010/pexels-photo-5947010.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Gin Tônica Especial"
            />
            <div className={styles.promoContent}>
              <h3>Gin Tônica Especial</h3>
              <p>Drink completo com desconto na semana promocional.</p>
              <span className={styles.oldPrice}>R$ 24,90</span>
              <span className={styles.newPrice}>R$ 19,90</span>
              <button>Adicionar ao carrinho</button>
            </div>
          </div>

          <div className={styles.promoCard}>
            <img
              src="https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Mojito Tropical"
            />
            <div className={styles.promoContent}>
              <h3>Mojito Tropical</h3>
              <p>Refrescante, aromático e com preço especial.</p>
              <span className={styles.oldPrice}>R$ 21,90</span>
              <span className={styles.newPrice}>R$ 17,90</span>
              <button>Adicionar ao carrinho</button>
            </div>
          </div>

          <div className={styles.promoCard}>
            <img
              src="https://images.pexels.com/photos/2531188/pexels-photo-2531188.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Drink da Casa"
            />
            <div className={styles.promoContent}>
              <h3>Drink da Casa</h3>
              <p>Sabor exclusivo preparado com frutas e toque especial.</p>
              <span className={styles.oldPrice}>R$ 23,90</span>
              <span className={styles.newPrice}>R$ 18,90</span>
              <button>Adicionar ao carrinho</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.sectionBlock}>
        <div className={styles.ctaBox}>
          <span className={styles.ctaTag}>Aproveite agora</span>
          <h2>Gostou das promoções?</h2>
          <p>
            Monte seu pedido agora mesmo e aproveite nossas melhores ofertas
            antes que acabem.
          </p>

          <div className={styles.ctaButtons}>
            <Link to="/cardapio" className={styles.primaryBtn}>
              Ver cardápio
            </Link>

            <Link to="/carrinho" className={styles.secondaryBtn}>
              Ir para o carrinho
            </Link>
          </div>
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

export default Promocoes;