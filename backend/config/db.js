import Sequelize from "sequelize";
import 'dotenv/config'; // Isso carrega o seu arquivo .env automaticamente

// O Sequelize agora tenta conectar pela URL do Render (process.env.DATABASE_URL)
// Se não existir (no seu PC), ele usa as suas credenciais locais
const sequelize = process.env.DATABASE_URL 
    ? new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false // Obrigatório para o plano FREE do Render
            }
        },
        logging: false
      })
    : new Sequelize('uai_grill', 'postgres', '628387', {
        host: 'localhost',
        dialect: 'postgres',
        logging: false
      });

// Teste de conexão simples
async function testarConexao() {
    try {
        await sequelize.authenticate();
        console.log(process.env.DATABASE_URL ? '✅ Conectado ao Banco do RENDER!' : '🏠 Conectado ao Banco LOCAL!');
    } catch (error) {
        console.error('❌ Erro de conexão:', error);
    }
}

testarConexao();

export default sequelize;