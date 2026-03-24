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
  const { addToCart, cart } = useCart();
  const [promocoes, setPromocoes] = useState([]); // Array vazio
  const [loading, setLoading] = useState(true);

  // efeito para controlar o loading
  useEffect(() => {
    if (loading) {
      Swal.fire({
        title: 'Processando Dados',
        html: 'Aguarde um momento enquanto preparamos tudo...',
        allowOutsideClick: false, // Impede de fechar clicando fora da caixa
        allowEscapeKey: false, // Impede de fechar apertando a tecla ESC
        showConfirmButton: false,

        // Customização visual
        width: '400px',
        padding: '3em',
        color: '#1e293b',
        backdrop: 'swal-custom-backdrop', // Aplica a classe CSS do fundo blur
        customClass: {
          popup: 'swal-custom-poup', // aplica a classe CSS do card 
        },
        // Ciclo de vida
        didOpen: () => {
          // Assim que o modal abrir visualmente, ele inicia o spinner de laoading
          Swal.showLoading();
        }
      });
    } else {
      Swal.close();
    }
  }, [loading]);

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

  if (loading) {
    console.log('Okay!')
  }

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
            <i className='fa-solid fa-cart-arrow-down'></i> ({cart.length})
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

        <div className={styles.promoGrid}>
          {promocoes
            .filter(p => p.categoria === 'Promoções da semana')
            .map(promocao => (
              <div key={promocao.id || promocao.nome} className={styles.highlightCard}>
                {Math.random() > 0.7 && <div className={styles.badge}>Mais pedido</div>}
                {/* <div className={styles.badge}>Mais pedido</div> */}
                <img
                  src={promocao.imagem}
                  alt="Combo Casal"
                />
                <div className={styles.cardContent}>
                  <h3>{promocao.nome}</h3>
                  <p>
                    {promocao.descricao}
                  </p>

                  <div className={styles.priceRow}>
                    <span className={styles.oldPrice}>R$ 72,90</span>
                    <span className={styles.newPrice}>R$ {promocao.preco}</span>
                  </div>

                  <button onClick={() => handleAdicionar(promocao)}>Adicionar ao carrinho</button>
                </div>
              </div>
            ))}
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
          {promocoes.filter(p => p.categoria === 'Combos promocionais')
            .map(promocao => (
              <div className={styles.promoCard}>
                <img
                  src={promocao.imagem}
                  alt="Combo Individual"
                />
                <div className={styles.promoContent}>
                  <h3>{promocao.nome}</h3>
                  <p>
                    {promocao.descricao}
                  </p>

                  <div className={styles.priceRow}>
                    <span className={styles.oldPrice}>R$ 34,90</span>
                    <span className={styles.newPrice}>R$ {promocao.preco}</span>
                  </div>

                  <button onClick={() => handleAdicionar(promocao)}>Adicionar ao carrinho</button>
                </div>
              </div>
            ))}
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
          {promocoes.filter(p => p.categoria === 'Promoções para brindar')
            .map(promocao => (
              <div className={styles.promoCard}>
                <img
                  src={promocao.imagem}
                  alt="Caipirinha em Dobro"
                />

                <div className={styles.promoContent}>
                  <h3>{promocao.nome}</h3>
                  <p>{promocao.descricao}</p>

                  <div className={styles.priceRow}>
                    <span className={styles.oldPrice}>R$ 33,80</span>
                    <span className={styles.newPrice}>R$ {promocao.preco}</span>
                  </div>

                  <button onClick={() => handleAdicionar(promocao)}>Adicionar ao carrinho</button>
                </div>
              </div>
            ))}
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