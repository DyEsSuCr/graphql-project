import { gql } from 'graphql-tag'
import { Predio } from '../models/index.js'

export const typeDefs = gql`
  type Property {
    id: ID
    avaluo: Float
    nombre: String
    departamento: String
    municipio: String
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
  }
`

export const resolvers = {
  Query: {
    propertys: async () => await Predio.findAll(),
    property: async (_, { id }) => await Predio.findByPk(id)
  },

  Mutation: {
    insertProperty: async (_, args) => await Predio.create(args)
  }
}
