import app from './app.js';
import sequelize from './config/db.js';
import user from './models/usuarios.js';
import product from './models/produtos.js';

// Função para conectar ao banco
async function connectDatabase() {

    // Cria abre a porta em '3000'
    const PORT = 3000
    try {
        // Tenta authenticar ao banco de dados
        await sequelize.authenticate();
        console.log('Connect has been estabelished with sucessfully!');
        // Logo após sincorniza o banco com as atualizações
        await sequelize.sync({ force: false });
        console.log('Database synced')
        // Abre o servidor para rodar na porta definida acima
        app.listen(PORT, () => {
            console.log(`Server is running in at: http://localhost:${PORT}`)
        })
    } catch (error) {
        // Não foi possivel conectar ao servidor
        console.error('Unable to connect to the database:', error);
    }
    
};

connectDatabase();