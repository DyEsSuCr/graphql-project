import { DataTypes } from 'sequelize'
import { sequelize } from '../database/connect.js'

export const Contruccion = sequelize.define('Contruccion', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  pisos: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  area: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipo_construccion: {
    type: DataTypes.ENUM(['INDUSTRIAL', 'COMERCIAL', 'RESIDENCIAL']),
    allowNull: false
  }
}, { timestamps: false })
