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

Predio.hasMany(Contruccion, {
  foreignKey: 'predioId',
  sourceKey: 'id'
})

Contruccion.belongsTo(Predio, {
  foreignKey: 'predioId',
  targetKey: 'id'
})

// 1-1
Terreno.hasOne(Predio)
Predio.belongsTo(Terreno)
