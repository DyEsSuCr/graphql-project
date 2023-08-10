import { gql } from 'graphql-tag'
import { Predio, Contruccion, Terreno, Propietario } from '../models/index.js'

export const typeDefs = gql`
  type Property {
    id: ID
    avaluo: Float
    nombre: String
    departamento: String
    municipio: String
    construccion: [Build]
    terreno: Land
    propietario: [Owner]
  }

  extend type Query {
    propertys: [Property]
    property(id: ID!): Property
  }
  
  extend type Mutation {
    insertProperty(
      avaluo: Float!
      nombre: String!
      departamento: String!
      municipio: String!
    ): Property

    updateProperty(
      id: ID!
      nombre: String
      departamento: String
      municipio: String
      avaluo: Float
    ): Property

    removeProperty(id: ID!): Property
  }
`

export const resolvers = {
  Query: {
    propertys: async () => await Predio.findAll(),
    property: async (_, { id }) => await Predio.findByPk(id)
  },

  Mutation: {
    insertProperty: async (_, args) => await Predio.create(args),

    updateProperty: async (_, args) => {
      const foundProperty = await Predio.findByPk(args.id)
      if (!foundProperty) throw new Error('Predio no encontrado')

      if (args.nombre) foundProperty.nombre = args.nombre
      if (args.departamento) foundProperty.departamento = args.departamento
      if (args.municipio) foundProperty.municipio = args.municipio
      if (args.avaluo) foundProperty.avaluo = args.avaluo

      return await foundProperty.save()
    },

    removeProperty: async (_, { id }) => {
      const foundProperty = await Predio.findByPk(id)
      if (!foundProperty) throw new Error('Predio no encontrado')

      await Contruccion.destroy({ where: { predioId: id } })
      await Terreno.destroy({ where: { predioId: id } })
      await Propietario.destroy({ where: { predioId: id } })
      return await foundProperty.destroy()
    }
  },

  Property: {
    construccion: async ({ id }) => await Contruccion.findAll({ where: { predioId: id } }),
    terreno: async ({ id }) => await Terreno.findOne({ where: { predioId: id } }),
    propietario: async ({ id }) => await Propietario.findAll({ where: { predioId: id } })
  }
}
