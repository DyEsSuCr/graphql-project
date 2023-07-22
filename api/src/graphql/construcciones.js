import gql from 'graphql-tag'
import { Contruccion } from '../models/index.js'

export const typeDefs = gql`
  enum TypeBuild {
    INDUSTRIAL
    COMERCIAL
    RESIDENCIAL
  }

  type Build {
    id: ID
    pisos: Int
    area: Float
    direccion: String
    tipo_construccion: TypeBuild
  }

  extend type Query {
    builds: [Build]
  }

  extend type Mutation {
    insertBuild(
      pisos: Int!,
      area: Float!,
      direccion: String!,
      tipo_construccion: TypeBuild!
    ): Build
  }
`

export const resolvers = {
  Query: {
    builds: async () => await Contruccion.findAll()
  },

  Mutation: {
    insertBuild: async (_, args) => await Contruccion.create(args)
  }
}
