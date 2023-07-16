import { DataTypes } from 'sequelize'
import { sequelize } from '../database/connect.js'

export const Property = sequelize.define('property', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  appraisal: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  departament: {
    type: DataTypes.STRING,
    allowNull: false
  },
  town: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { timestamps: false })
