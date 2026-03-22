# 🍔 UaiGrill - Sistema de Delivery Full Stack

O **UaiGrill** é uma plataforma completa de delivery desenvolvida para oferecer uma experiência fluida tanto para o cliente quanto para o estabelecimento. O sistema conta com um cardápio dinâmico, gerenciamento de estado global para o carrinho, validação de cupons e integração robusta com banco de dados relacional.

---

## 🚀 Funcionalidades Principais

* **Cardápio Dinâmico:** Listagem de produtos consumida em tempo real do banco de dados, categorizada por tipo (Lanches, Pizzas, Bebidas, etc).
* **Carrinho Inteligente:** Gerenciamento de itens via Context API, permitindo adicionar, remover e ajustar quantidades de qualquer lugar da aplicação.
* **Sistema de Cupons:** Validação de cupons de desconto (ex: `UAIGRILL10`) com cálculo automático de abatimento.
* **Checkout Completo:** Formulário de finalização de pedido com seleção de método de entrega (Delivery/Retirada/Restaurante) e forma de pagamento.
* **Segurança no Backend:** O servidor não confia nos preços do frontend; ele recalcula o subtotal e o total consultando os valores oficiais no banco de dados para evitar fraudes.
* **UX Aprimorada:** Feedback visual em tempo real através do `react-hot-toast` para todas as ações do usuário.

---

## 🛠️ Tecnologias Utilizadas

### **Frontend**
* **React.js (Vite):** Biblioteca principal para a interface.
* **React Router Dom:** Gerenciamento de rotas (Home, Cardápio, Carrinho, Checkout).
* **Context API:** Estado global para persistência do carrinho e cálculos.
* **CSS Modules:** Estilização isolada e organizada.
* **Axios:** Consumo de APIs REST.

### **Backend**
* **Node.js & Express:** Ambiente de execução e framework para a API.
* **Sequelize (ORM):** Abstração de banco de dados para consultas seguras e eficientes.
* **PostgreSQL:** Banco de dados relacional para armazenamento de produtos, pedidos e cupons.
* **CORS:** Configuração de segurança para integração entre domínios.

---

## 📦 Como rodar o projeto

### **1. Pré-requisitos**
* Node.js instalado.
* PostgreSQL rodando localmente ou via Docker.

### **2. Configuração do Backend**
```bash
# Entre na pasta do backend
cd backend

# Instale as dependências
npm install

# Inicie o servidor (em modo watch para desenvolvimento)
node --watch server.js

📐 Estrutura do Banco de Dados
O sistema utiliza os seguintes modelos principais:

Produtos: Nome, descrição, preço, imagem, categoria e disponibilidade.

Pedidos: Itens (JSONB), subtotal, taxa de entrega, desconto, total e status.

Cupons: Código, valor (fixo ou percentual), validade e status.

👨‍💻 Autor
Mateus Dayson de Oliveira
Desenvolvedor Full Stack especializado em ecossistema JavaScript.

© 2026 UaiGrill - Todos os direitos reservados


**Dica de Senior:** Agora que o README está pronto, que tal eu te ajudar a criar uma **pá