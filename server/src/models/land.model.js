import { DataTypes } from 'sequelize'
import { sequelize } from '../database/connect.js'

export const Land = sequelize.define('land', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  area: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  commercial_value: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  water_sources: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
  type_land: {
    type: DataTypes.ENUM(['rural', 'urbano']),
    allowNull: false
  }
}, { timestamps: false })
