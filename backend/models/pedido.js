import { DataTypes } from "sequelize";
import sequelize from "../config/db";


// Cria a entidade pedido com os seguintes atributos no banco 
const pedido = sequelize.define('Pedido', {
    id: { // Cria o atributo ID
        type: DataTypes.INTEGER, // Do tipo inteiro
        primaryKey: true, // Como chave primaria
        autoIncrement: true, // Incrementa automaticamente
        allowNull: false // Não pode ser vazio
    },
    codigo: {
        type: DataTypes.STRING,
        unique: true, // Deve ser único
        allowNull: false
    },
    itens: {
        type: DataTypes.JSONB, // Para guardar arrays de produto de carrinho
        allowNull: false,
    },
    subtotal: {
        type: DataTypes.DECIMAL(10, 2), // Para lidar melhor com valores em dinheiro 
        allowNull: false,
    },
    entrega: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    desconto: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('Recebido', 'Preparando', 'Entregue', 'Cancelado'),
        defaultValue: 'Recebido'
    }  
},{
    hooks: {
        beforeCreate: (pedido) => {
            // Gera um número aleatório de 4 digitos
            const numero = Math.floor(1000 + Math.random() * 9000);
            pedido.codigo = `#UG-${numero}`;
        }
    }
});

export default pedido;