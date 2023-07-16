import { DataTypes } from 'sequelize'
import { sequelize } from '../database/connect.js'

export const Owner = sequelize.define('owners', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  type_document: {
    type: DataTypes.DOUBLE
  },
  num_document: {
    type: DataTypes.STRING
  },
  name: {
    type: DataTypes.STRING
  },
  lastname: {
    type: DataTypes.STRING
  },
  addres: {
    type: DataTypes.STRING
  },
  num_phone: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  NIT: {
    type: DataTypes.STRING
  },
  business_name: {
    type: DataTypes.STRING
  },
  type_owner: {
    type: DataTypes.ENUM(['natural', 'juridica'])
  }
}, { timestamps: false })
