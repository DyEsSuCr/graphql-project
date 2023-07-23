import { DataTypes } from 'sequelize'
import { sequelize } from '../database/connect.js'

export const Terreno = sequelize.define('Terreno', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  area: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  precio_comercial: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  cerca_fuentes: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
  tipo_terreno: {
    type: DataTypes.ENUM(['RURAL', 'URBANO']),
    allowNull: false
  }
}, { timestamps: false })
