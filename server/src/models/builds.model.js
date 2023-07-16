import { DataTypes } from 'sequelize'
import { sequelize } from '../database/connect.js'

export const Build = sequelize.define('builds', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  floors: {
    type: DataTypes.NUMBER
  },
  area: {
    type: DataTypes.DOUBLE
  },
  addres: {
    type: DataTypes.STRING
  },
  type_build: {
    type: DataTypes.ENUM(['industrial', 'comercial', 'recidencial'])
  }
}, { timestamps: false })
