import { DataTypes } from 'sequelize'
import { sequelize } from '../database/connect.js'

export const Predio = sequelize.define('Predio', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  avaluo: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  departamento: {
    type: DataTypes.STRING,
    allowNull: false
  },
  municipio: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { timestamps: false })
