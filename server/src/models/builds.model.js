import { DataTypes } from 'sequelize'
import { sequelize } from '../database/connect.js'

export const Build = sequelize.define('builds', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  floors: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  area: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  addres: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type_build: {
    type: DataTypes.ENUM(['INDUSTRIAL', 'COMERCIAL', 'RESIDENCIAL']),
    allowNull: false
  }
}, { timestamps: false })
