import gql from 'graphql-tag'
import { Build } from '../models/index.js'

export const typeDefs = gql`
  enum TypeBuild {
    INDUSTRIAL
    COMERCIAL
    RESIDENCIAL
  }

  type Build {
    id: ID
    floors: Int
    area: Float
    addres: String
    type_build: TypeBuild
  }

  extend type Query {
    builds: [Build]
  }

  extend type Mutation {
    createBuild(
      floors: Int!,
      area: Float!,
      addres: String!,
      type_build: 
      TypeBuild!
    ): Build
  }
`

export const resolvers = {
  Query: {
    builds: async () => await Build.findAll()
  },

  Mutation: {
    createBuild: async (_, args) => await Build.create(args)
  }
}
