import { DataTypes } from 'sequelize'
import { sequelize } from '../database/connect.js'

export const Owner = sequelize.define('owners', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  num_document: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  addres: {
    type: DataTypes.STRING,
    allowNull: false
  },
  num_phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING
  },
  NIT: {
    type: DataTypes.STRING,
    allowNull: false
  },
  business_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type_document: {
    type: DataTypes.ENUM(['CC', 'TI', 'DI', 'CI', 'DNI']),
    allowNull: false
  },
  type_owner: {
    type: DataTypes.ENUM(['NATURAL', 'JURIDICO']),
    allowNull: false
  }
}, { timestamps: false })
