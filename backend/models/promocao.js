import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const promocao = sequelize.define('Promoção', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    categoria: {
        type: DataTypes.ENUM('Promoções da semana', 'Combos promocionais', 'Promoções para brindar'),
        allowNull: false,
    },
    preco: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    imagem: {
        type: DataTypes.STRING,
        allowNull: false
    },
    disponibilidade: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    }
});

export default promocao;