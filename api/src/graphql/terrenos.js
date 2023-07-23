import { gql } from 'graphql-tag'
import { Terreno } from '../models/index.js'

export const typeDefs = gql`
  enum TypeLand {
    RURAL
    URBANO
  }

  type Land {
    id: ID
    area: Float
    precio_comercial: Float
    cerca_fuentes: Boolean
    tipo_terreno: TypeLand
  }

  extend type Query {
    lands: [Land]
    land(id: ID!): Land
  }

  extend type Mutation {
    insertLand(
      area: Float!
      precio_comercial: Float!
      cerca_fuentes: Boolean!
      tipo_terreno: TypeLand!
      predioId: ID!
    ): Land

    removeLand(id: ID!): Land
  }
`

export const resolvers = {
  Query: {
    lands: async () => await Terreno.findAll(),
    land: async (_, { id }) => await Terreno.findByPk(id)
  },

  Mutation: {
    insertLand: async (_, args) => await Terreno.create(args),

    removeLand: async (_, { id }) => {
      const foundLand = await Terreno.findByPk(id)
      if (!foundLand) throw new Error('Terreno no encontrado')

      foundLand.destroy()
      return foundLand
    }
  }
}
