import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

// Cria a entidade Usuário com os seguintes atributos
const user = sequelize.define('Usuario', {
        id: {  // Cria o atributo ID
            type: DataTypes.INTEGER, // Do tipo Inteiro
            primaryKey:true, // Como chave primaria
            autoIncrement: true, // Incrementa o ID automaticamente
            allowNull: false, // Não pode ser vazio
        },
        name: { // Cria a atributo name
            type: DataTypes.STRING, // Deve ser uma string
            allowNull: false, // Não pode ser vazio
        },
        email: { // Cria a atributo email
            type: DataTypes.STRING, // Deve ser uma string
            unique: true, // Deve ser uma string única
        },
        password: { // Cria o atributo senha
            type: DataTypes.STRING, // Deve ser uma string
        }
});


export default user