import { gql } from 'graphql-tag'
import { Predio, Contruccion } from '../models/index.js'

export const typeDefs = gql`
  type Property {
    id: ID
    avaluo: Float
    nombre: String
    departamento: String
    municipio: String
    construccion: [Build]
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
    removeProperty: async (_, { id }) => {
      const foundProperty = await Predio.findByPk(id)
      if (!foundProperty) throw new Error('Predio no encontrado')
      return foundProperty
    }
  },

  Property: {
    construccion: async ({ id }) => await Contruccion.findAll({ where: { predioId: id } })
  }
}
