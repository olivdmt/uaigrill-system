import { Link } from 'react-router-dom';
import styles from './cardapio.module.css';
import logo from '../../assets/logoUaiGrill-01.png';

function Cardapio() {
  return (
    <div className={styles.container}>
      {/* HEADER / NAVBAR */}
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
          <span className={styles.heroBadge}>Cardápio completo</span>
          <h1>Nosso Cardápio</h1>
          <p>
            Escolha entre lanches artesanais, pizzas saborosas, porções generosas,
            bebidas geladas e drinks especiais preparados para qualquer ocasião.
          </p>
        </div>
      </section>

      {/* BUSCA E FILTROS */}
      <section className={styles.searchSection}>
        <div className={styles.searchBox}>
          <input type="text" placeholder="Buscar item do cardápio..." />
          <button>Buscar</button>
        </div>
      </section>

      <section className={styles.filterWrapper}>
        <div className={styles.filterSection}>
          <button className={styles.activeFilter}>Todos</button>
          <button>Lanches</button>
          <button>Pizzas</button>
          <button>Porções</button>
          <button>Bebidas</button>
          <button>Drinks</button>
        </div>
      </section>

      {/* LANCHES */}
      <section className={styles.menuSection}>
        <div className={styles.sectionHeader}>
          <span>Categoria</span>
          <h2>Lanches</h2>
          <p>Hambúrgueres artesanais preparados com sabor e ingredientes selecionados.</p>
        </div>

        <div className={styles.menuGrid}>
          <div className={styles.menuCard}>
            <img src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=800" alt="X-Burguer" />
            <div className={styles.cardBody}>
              <h3>X-Burguer</h3>
              <p>Pão macio, hambúrguer suculento, queijo e molho especial.</p>
              <div className={styles.cardFooter}>
                <span>R$ 18,90</span>
                <button>Adicionar</button>
              </div>
            </div>
          </div>

          <div className={styles.menuCard}>
            <img src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=800" alt="X-Salada" />
            <div className={styles.cardBody}>
              <h3>X-Salada</h3>
              <p>Hambúrguer, queijo, alface, tomate e maionese da casa.</p>
              <div className={styles.cardFooter}>
                <span>R$ 20,90</span>
                <button>Adicionar</button>
              </div>
            </div>
          </div>

          <div className={styles.menuCard}>
            <img src="https://images.pexels.com/photos/3219483/pexels-photo-3219483.jpeg?auto=compress&cs=tinysrgb&w=800" alt="X-Bacon" />
            <div className={styles.cardBody}>
              <h3>X-Bacon</h3>
              <p>Hambúrguer, queijo, bacon crocante e molho especial.</p>
              <div className={styles.cardFooter}>
                <span>R$ 23,90</span>
                <button>Adicionar</button>
              </div>
            </div>
          </div>

          <div className={styles.menuCard}>
            <img src="https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg?auto=compress&cs=tinysrgb&w=800" alt="X-Tudo" />
            <div className={styles.cardBody}>
              <h3>X-Tudo</h3>
              <p>Hambúrguer, queijo, presunto, bacon, ovo, alface e tomate.</p>
              <div className={styles.cardFooter}>
                <span>R$ 28,90</span>
                <button>Adicionar</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PIZZAS */}
      <section className={styles.menuSection}>
        <div className={styles.sectionHeader}>
          <span>Categoria</span>
          <h2>Pizzas</h2>
          <p>Massas saborosas com recheios caprichados para compartilhar.</p>
        </div>

        <div className={styles.menuGrid}>
          <div className={styles.menuCard}>
            <img src="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Pizza Calabresa" />
            <div className={styles.cardBody}>
              <h3>Pizza Calabresa</h3>
              <p>Mussarela, calabresa fatiada, cebola e molho especial.</p>
              <div className={styles.cardFooter}>
                <span>R$ 49,90</span>
                <button>Adicionar</button>
              </div>
            </div>
          </div>

          <div className={styles.menuCard}>
            <img src="https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Pizza Portuguesa" />
            <div className={styles.cardBody}>
              <h3>Pizza Portuguesa</h3>
              <p>Mussarela, presunto, ovos, cebola, azeitona e molho.</p>
              <div className={styles.cardFooter}>
                <span>R$ 54,90</span>
                <button>Adicionar</button>
              </div>
            </div>
          </div>

          <div className={styles.menuCard}>
            <img src="https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Frango com Catupiry" />
            <div className={styles.cardBody}>
              <h3>Frango com Catupiry</h3>
              <p>Frango desfiado, catupiry cremoso e mussarela.</p>
              <div className={styles.cardFooter}>
                <span>R$ 56,90</span>
                <button>Adicionar</button>
              </div>
            </div>
          </div>

          <div className={styles.menuCard}>
            <img src="https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Pizza 4 Queijos" />
            <div className={styles.cardBody}>
              <h3>Pizza 4 Queijos</h3>
              <p>Mussarela, parmesão, provolone e catupiry.</p>
              <div className={styles.cardFooter}>
                <span>R$ 58,90</span>
                <button>Adicionar</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORÇÕES */}
      <section className={styles.menuSection}>
        <div className={styles.sectionHeader}>
          <span>Categoria</span>
          <h2>Porções</h2>
          <p>Opções ideais para dividir e aproveitar momentos especiais.</p>
        </div>

        <div className={styles.menuGrid}>
          <div className={styles.menuCard}>
            <img src="https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Batata Frita" />
            <div className={styles.cardBody}>
              <h3>Batata Frita</h3>
              <p>Batatas crocantes e douradas, perfeitas para compartilhar.</p>
              <div className={styles.cardFooter}>
                <span>R$ 24,90</span>
                <button>Adicionar</button>
              </div>
            </div>
          </div>

          <div className={styles.menuCard}>
            <img src="https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Batata com Cheddar e Bacon" />
            <div className={styles.cardBody}>
              <h3>Batata Cheddar e Bacon</h3>
              <p>Batata frita com cheddar cremoso e bacon crocante.</p>
              <div className={styles.cardFooter}>
                <span>R$ 32,90</span>
                <button>Adicionar</button>
              </div>
            </div>
          </div>

          <div className={styles.menuCard}>
            <img src="https://images.pexels.com/photos/6941026/pexels-photo-6941026.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Isca de Frango" />
            <div className={styles.cardBody}>
              <h3>Isca de Frango</h3>
              <p>Frango empanado crocante servido com molho especial.</p>
              <div className={styles.cardFooter}>
                <span>R$ 34,90</span>
                <button>Adicionar</button>
              </div>
            </div>
          </div>

          <div className={styles.menuCard}>
            <img src="https://images.pexels.com/photos/3298688/pexels-photo-3298688.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Peixe com Fritas" />
            <div className={styles.cardBody}>
              <h3>Peixe com Fritas</h3>
              <p>Peixe empanado com fritas crocantes e limão.</p>
              <div className={styles.cardFooter}>
                <span>R$ 39,90</span>
                <button>Adicionar</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEBIDAS */}
      <section className={styles.menuSection}>
        <div className={styles.sectionHeader}>
          <span>Categoria</span>
          <h2>Bebidas</h2>
          <p>Opções geladas e refrescantes para acompanhar seu pedido.</p>
        </div>

        <div className={styles.menuGrid}>
          <div className={styles.menuCard}>
            <img src="https://images.pexels.com/photos/2668308/pexels-photo-2668308.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Refrigerante Lata" />
            <div className={styles.cardBody}>
              <h3>Refrigerante Lata</h3>
              <p>Coca-Cola, Guaraná, Fanta ou Sprite.</p>
              <div className={styles.cardFooter}>
                <span>R$ 6,90</span>
                <button>Adicionar</button>
              </div>
            </div>
          </div>

          <div className={styles.menuCard}>
            <img src="https://images.pexels.com/photos/2983100/pexels-photo-2983100.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Refrigerante 2L" />
            <div className={styles.cardBody}>
              <h3>Refrigerante 2L</h3>
              <p>Ideal para acompanhar sua refeição em família.</p>
              <div className={styles.cardFooter}>
                <span>R$ 12,90</span>
                <button>Adicionar</button>
              </div>
            </div>
          </div>

          <div className={styles.menuCard}>
            <img src="https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Suco Natural" />
            <div className={styles.cardBody}>
              <h3>Suco Natural</h3>
              <p>Sabores variados preparados na hora.</p>
              <div className={styles.cardFooter}>
                <span>R$ 9,90</span>
                <button>Adicionar</button>
              </div>
            </div>
          </div>

          <div className={styles.menuCard}>
            <img src="https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Água Mineral" />
            <div className={styles.cardBody}>
              <h3>Água Mineral</h3>
              <p>Sem gás ou com gás, ideal para qualquer refeição.</p>
              <div className={styles.cardFooter}>
                <span>R$ 4,90</span>
                <button>Adicionar</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DRINKS */}
      <section className={styles.menuSection}>
        <div className={styles.sectionHeader}>
          <span>Categoria</span>
          <h2>Drinks</h2>
          <p>Bebidas especiais para completar a experiência da casa.</p>
        </div>

        <div className={styles.menuGrid}>
          <div className={styles.menuCard}>
            <img src="https://images.pexels.com/photos/1269025/pexels-photo-1269025.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Caipirinha" />
            <div className={styles.cardBody}>
              <h3>Caipirinha</h3>
              <p>Drink clássico preparado com limão, gelo, açúcar e destilado.</p>
              <div className={styles.cardFooter}>
                <span>R$ 16,90</span>
                <button>Adicionar</button>
              </div>
            </div>
          </div>

          <div className={styles.menuCard}>
            <img src="https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Mojito" />
            <div className={styles.cardBody}>
              <h3>Mojito</h3>
              <p>Drink refrescante com hortelã, limão, gelo e toque especial.</p>
              <div className={styles.cardFooter}>
                <span>R$ 18,90</span>
                <button>Adicionar</button>
              </div>
            </div>
          </div>

          <div className={styles.menuCard}>
            <img src="https://images.pexels.com/photos/5947010/pexels-photo-5947010.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Gin Tônica" />
            <div className={styles.cardBody}>
              <h3>Gin Tônica</h3>
              <p>Combinação equilibrada de gin, água tônica, gelo e especiarias.</p>
              <div className={styles.cardFooter}>
                <span>R$ 22,90</span>
                <button>Adicionar</button>
              </div>
            </div>
          </div>

          <div className={styles.menuCard}>
            <img src="https://images.pexels.com/photos/2531188/pexels-photo-2531188.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Drink Tropical" />
            <div className={styles.cardBody}>
              <h3>Drink Tropical</h3>
              <p>Bebida especial com frutas, gelo e sabor marcante.</p>
              <div className={styles.cardFooter}>
                <span>R$ 19,90</span>
                <button>Adicionar</button>
              </div>
            </div>
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

export default Cardapio;