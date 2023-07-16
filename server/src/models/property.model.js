import { DataTypes } from 'sequelize'
import { sequelize } from '../database/connect.js'

export const Property = sequelize.define('property', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  appraisal: {
    type: DataTypes.DOUBLE
  },
  name: {
    type: DataTypes.STRING
  },
  departament: {
    type: DataTypes.STRING
  },
  town: {
    type: DataTypes.STRING
  }
}, { timestamps: false })
