import { gql } from 'graphql-tag'
import { Land } from '../models/index.js'

export const typeDefs = gql`
  enum TypeLand {
    RURAL
    URBANO
  }

  type Land {
    id: ID
    area: Float
    commercial_value: Float
    water_sources: Boolean
    type_land: TypeLand
  }

  extend type Query {
    lands: [Land]
  }

  extend type Mutation {
    createLand(
      area: Float
      commercial_value: Float
      water_sources: Boolean
      type_land: TypeLand
    ): Land
  }
`

export const resolvers = {
  Query: {
    lands: async () => await Land.findAll()
  },

  Mutation: {
    createLand: async (_, args) => await Land.create(args)
  }
}
