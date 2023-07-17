import { Owner, Build, Land, Property } from './index.js'

// 1-m
Owner.hasMany(Property, {
  foreignKey: 'OwnerId',
  sourceKey: 'id'
})

Property.belongsTo(Owner, {
  foreignKey: 'OwnerId',
  targetKey: 'id'
})

Build.hasMany(Property, {
  foreignKey: 'buildId',
  sourceKey: 'id'
})

Property.belongsTo(Build, {
  foreignKey: 'buildId',
  targetKey: 'id'
})

// 1-1
Land.hasOne(Property)
Property.belongsTo(Land)
