import { DataTypes } from 'sequelize'
import { sequelize } from '../database/connect.js'

export const Propietario = sequelize.define('Propietario', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  num_documento: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nombres: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellidos: {
    type: DataTypes.STRING,
    allowNull: false
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  num_celular: {
    type: DataTypes.STRING,
    allowNull: false
  },
  correo: {
    type: DataTypes.STRING
  },
  NIT: {
    type: DataTypes.STRING,
    allowNull: false
  },
  razon_social: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipo_documento: {
    type: DataTypes.ENUM(['CC', 'TI', 'DI', 'CI', 'DNI']),
    allowNull: false
  },
  tipo_propietario: {
    type: DataTypes.ENUM(['NATURAL', 'JURIDICO']),
    allowNull: false
  }
}, { timestamps: false })
