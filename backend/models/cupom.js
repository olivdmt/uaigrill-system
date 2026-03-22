import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const cupom = sequelize.define('Cupom', {
    codigo: {
        type: DataTypes.STRING,
        unique: true
    },
    tipo: {
        type: DataTypes.ENUM('Fixo', 'Percentual')
    },
    valor: {
        type: DataTypes.DECIMAL(10, 2)
    },
    validade: {
        type: DataTypes.DATE
    },
    ativo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});

export default cupom;