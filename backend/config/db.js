// Importando o Sequelize
import Sequelize from "sequelize";

// Conectando ao Postgres
const sequelize = new Sequelize('uai_grill', 'postgres', '628387', {
    host: 'localhost',
    dialect: 'postgres'
});

export default sequelize;
