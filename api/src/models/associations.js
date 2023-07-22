import { Contruccion, Predio, Propietario, Terreno } from './index.js'

// 1-m
Propietario.hasMany(Predio, {
  foreignKey: 'propietarioId',
  sourceKey: 'id'
})

Predio.belongsTo(Propietario, {
  foreignKey: 'propietarioId',
  targetKey: 'id'
})

Contruccion.hasMany(Predio, {
  foreignKey: 'construccionId',
  sourceKey: 'id'
})

Predio.belongsTo(Contruccion, {
  foreignKey: 'construccionId',
  targetKey: 'id'
})

// 1-1
Terreno.hasOne(Predio)
Predio.belongsTo(Terreno)
