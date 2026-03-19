import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

// Cria a entidade Produto com os seguintes atributos
const product =  sequelize.define('Produto', {
    id: { // Cria um atributo
        type: DataTypes.INTEGER, // Do tipo inteiro
        primaryKey: true, // Define como chave priamaria
        autoIncrement: true, // Incrementa o ID automaticamente
        allowNull: false // Não pode ser vazio
    },
    nome: {
        type: DataTypes.STRING, // Deve ser do tipo STRING(texto)
        allowNull: false, // Não pode ser vazio
    },
    descricao: {
        type: DataTypes.TEXT, 
        allowNull: false,
    },
    categoria: {
        type: DataTypes.ENUM('Lanches', 'Pizzas', 'Porções', 'Bebidas', 'Drinks'),
        allowNull: false,
    },
    preco: {
        type: DataTypes.DECIMAL(10, 2), // Melhor para tratar dinheiro envolvendo arredonadmento
        allowNull: false,
    },
    imagem: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    disponibilidade: {
        type: DataTypes.BOOLEAN, // Diretriz para verdadeiro e falso
        defaultValue: true, // Já define como disponível para venda
    }
});

export default product;