import { DataTypes } from 'sequelize'
import { sequelize } from '../database/connect.js'

export const Land = sequelize.define('land', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  area: {
    type: DataTypes.DOUBLE
  },
  commercial_value: {
    type: DataTypes.DOUBLE
  },
  water_sources: {
    type: DataTypes.BOOLEAN
  },
  type_land: {
    type: DataTypes.ENUM(['rural', 'urbano'])
  }
}, { timestamps: false })
