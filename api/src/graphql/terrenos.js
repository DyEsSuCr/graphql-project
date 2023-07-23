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
  }

  extend type Mutation {
    insertLand(
      area: Float!
      precio_comercial: Float!
      cerca_fuentes: Boolean!
      tipo_terreno: TypeLand!
      predioId: ID!
    ): Land
  }
`

export const resolvers = {
  Query: {
    lands: async () => await Terreno.findAll()
  },

  Mutation: {
    insertLand: async (_, args) => await Terreno.create(args)
  }
}
