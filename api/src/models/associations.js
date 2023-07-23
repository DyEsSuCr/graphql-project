import { Contruccion, Predio, Propietario, Terreno } from './index.js'

// 1-m
Predio.hasMany(Propietario, {
  foreignKey: 'predioId',
  sourceKey: 'id'
})

Propietario.belongsTo(Predio, {
  foreignKey: 'predioId',
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
Predio.hasOne(Terreno, { foreignKey: 'predioId' })
Terreno.belongsTo(Predio, { foreignKey: 'predioId' })
