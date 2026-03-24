import { useState, useEffect } from 'react';
import { pedidoService } from '../../services/pedidoService';
import { useCart } from '../../context/CartContext';
import toast from 'react-hot-toast'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import styles from './promocoes.module.css';
import logo from '../../assets/logoUaiGrill-01.png';

function Promocoes() {
  // Atributo que criamos para adicionar ao carrinho
  const {addToCart, cart} = useCart();
  const [promocoes, setPromocoes] = useState([]); // Array vazio
  const [loading, setLoading] = useState(true);

  // useEffect para carregador os dados ao atualizar a página
  useEffect(() => {
    async function carregarDados() {
      try {
        // Instânciamos diretamente de pedidos para listar todos os pedidos
        const dados = await pedidoService.getPromotion();
        // Recebe os dados que estão retornando de "pedidoService"
        setPromocoes(dados);
      } catch (error) {
        console.error("Erro loading promotion: ", error.message);
      } finally {
        setLoading(false);
      }
    }
    carregarDados();
  }, []);

  const handleAdicionar = (promocao) => {
    addToCart(promocao); // Chama a função do context
    toast.success(`${promocao.nome} adicionado ao carrinho!`, {
      style: {
        border: '1px solid #ff6b00',
        padding: '16px',
        color: '#333',
        borderBottom: 'rgba(15, 23, 42, 0.06)',
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)'
      },
      iconTheme: {
        primary: '#ff6b00',
        secondary: '#fffaee',
      },
    });
  };

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
        
        {promocoes
          .filter(p => p.categoria === 'Promoção da semana')
          .map(produto => (
              <div className={styles.highlightCard}>
                <div className={styles.badge}>Mais pedido</div>
                <img
                  src={produto.imagem}
                  alt="Combo Casal"
                />
                <div className={styles.cardContent}>
                  <h3>{produto.nome}</h3>
                  <p>
                    {produto.descricao}
                  </p>

                  <div className={styles.priceRow}>
                    <span className={styles.oldPrice}>R$ 72,90</span>
                    <span className={styles.newPrice}>{produto.preco}</span>
                  </div>

                  <button onClick={() => handleAdicionar(produto)}>Adicionar ao carrinho</button>
                </div>
              </div>
          ))};
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