import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './cardapio.module.css';
import logo from '../../assets/logoUaiGrill-01.png';
import { pedidoService } from '../../services/pedidoService';
import { useCart } from '../../context/CartContext';
import toast from 'react-hot-toast';


function Cardapio() {

  const { addToCart, cart} = useCart();
  
  const [produtos, setProdutos] = useState([]); // Array vazio
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarDados() {
      try {
        const dados = await pedidoService.getTodos();
        setProdutos(dados);
      } catch (error) {
        console.error("Erro loagind menu: ", error);
      } finally {
        setLoading(false);
      }
    }
    carregarDados();
  }, []);

  const handleAdicionar = (produto) => {
    addToCart(produto); // Chama a função do context
    toast.success(`${produto.nome} adicionado ao carrinho!`, {
      style: {
        border: '1px solid #ff6b00',
        padding: '16px',
        color: '#333',
      },
      iconTheme: {
        primary: '#ff6b00',
        secondary: '#fffaee',
      },
    });
  };

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
            <i className='fa-solid fa-cart-arrow-down'></i> ({cart.length})
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
          {produtos
            .filter(p => p.categoria === 'Lanches') // Filtra pela categoria do seu ENUM
            .map(produto => (
              <div className={styles.menuCard} key={produto.id}>
                <img src={produto.imagem} alt={produto.nome} />
                <div className={styles.cardBody}>
                  <h3>{produto.nome}</h3>
                  <p>{produto.descricao}</p>
                  <div className={styles.cardFooter}>
                    <span>R$ {Number(produto.preco).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                    <button onClick={() => handleAdicionar(produto)}>Adiconar</button>
                  </div>
                </div>
              </div>
            ))
          }
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
          {produtos
            .filter(p => p.categoria === 'Pizzas')
            .map(produto => (
              <div className={styles.menuCard} key={produto.id}>
                <img src={produto.imagem} alt={produto.nome} />
                <div className={styles.cardBody}>
                  <h3>{produto.nome}</h3>
                  <p>{produto.descricao}</p>
                  <div className={styles.cardFooter}>
                    <span>R$ {Number(produto.preco).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                    <button onClick={() => handleAdicionar(produto)}>Adiconar</button>
                  </div>
                </div>
              </div>
            ))

          }
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
          {produtos
            .filter(p => p.categoria === 'Porções') // Filtra pela categoria do seu ENUM
            .map(produto => (
              <div className={styles.menuCard} key={produto.id}>
                <img src={produto.imagem} alt={produto.nome} />
                <div className={styles.cardBody}>
                  <h3>{produto.nome}</h3>
                  <p>{produto.descricao}</p>
                  <div className={styles.cardFooter}>
                    <span>R$ {Number(produto.preco).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                    <button onClick={() => handleAdicionar(produto)}>Adiconar</button>
                  </div>
                </div>
              </div>
            ))
          }
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
          {produtos
            .filter(p => p.categoria === 'Bebidas') // Filtra pela categoria do seu ENUM
            .map(produto => (
              <div className={styles.menuCard} key={produto.id}>
                <img src={produto.imagem} alt={produto.nome} />
                <div className={styles.cardBody}>
                  <h3>{produto.nome}</h3>
                  <p>{produto.descricao}</p>
                  <div className={styles.cardFooter}>
                    <span>R$ {Number(produto.preco).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                    <button onClick={() => handleAdicionar(produto)}>Adiconar</button>
                  </div>
                </div>
              </div>
            ))
          }
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
          {produtos
            .filter(p => p.categoria === 'Drinks') // Filtra pela categoria do seu ENUM
            .map(produto => (
              <div className={styles.menuCard} key={produto.id}>
                <img src={produto.imagem} alt={produto.nome} />
                <div className={styles.cardBody}>
                  <h3>{produto.nome}</h3>
                  <p>{produto.descricao}</p>
                  <div className={styles.cardFooter}>
                    <span>R$ {Number(produto.preco).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                    <button onClick={() => handleAdicionar(produto)}>Adiconar</button>
                  </div>
                </div>
              </div>
            ))
          }
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