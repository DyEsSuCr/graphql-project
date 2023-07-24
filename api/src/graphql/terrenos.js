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

    updateLand(
      id: ID!
      area: Float
      precio_comercial: Float
      cerca_fuentes: Boolean
      tipo_terreno: TypeLand
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

    updateLand: async (_, args) => {
      const foundLand = await Terreno.findByPk(args.id)
      if (!foundLand) throw new Error('Terreno no encontrada')

      if (args.area) foundLand.area = args.area
      if (args.precio_comercial) foundLand.precio_comercial = args.precio_comercial
      if (args.tipo_terreno) foundLand.tipo_terreno = args.tipo_terreno
      foundLand.cerca_fuentes = args.cerca_fuentes

      return await foundLand.save()
    },

    removeLand: async (_, { id }) => {
      const foundLand = await Terreno.findByPk(id)
      if (!foundLand) throw new Error('Terreno no encontrado')

      foundLand.destroy()
      return foundLand
    }
  }
}
