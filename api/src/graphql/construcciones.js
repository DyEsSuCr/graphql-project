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
      predioId: ID!
    ): Build

    removeBuild(id: ID!): Build

    updateBuild(id: ID!): Build
  }
`

export const resolvers = {
  Query: {
    builds: async () => await Contruccion.findAll()
  },

  Mutation: {
    insertBuild: async (_, args) => await Contruccion.create(args),

    updateBuild: async (_, args) => {
      const foundBuild = await Contruccion.findByPk(args.id)
      if (!foundBuild) throw new Error('Construccion no encontrada')

      if (args.pisos) foundBuild.pisos = args.pisos
      if (args.area) foundBuild.area = args.area
      if (args.direccion) foundBuild.direccion = args.direccion
      if (args.tipo_construccion) foundBuild.tipo_construccion = args.tipo_construccion

      return await foundBuild.save()
    },

    removeBuild: async (_, { id }) => {
      const foundBuild = await Contruccion.findByPk(id)
      if (!foundBuild) throw new Error('Predio no encontrado')

      foundBuild.destroy()
      return foundBuild
    }
  }
}
