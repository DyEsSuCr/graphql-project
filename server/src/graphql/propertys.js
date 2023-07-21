import { gql } from 'graphql-tag'
import { Property } from '../models/index.js'

export const typeDefs = gql`
  type Property {
    id: ID
    appraisal: Float
    name: String
    departament: String
    town: String
  }

  extend type Query {
    propertys: [Property]
    property(id: ID!): Property 
  }
  
  extend type Mutation {
    createProperty(
      appraisal: Float
      name: String
      departament: String
      town: String
    ): Property
  }
`

export const resolvers = {
  Query: {
    propertys: async () => await Property.findAll(),
    property: async (_, { id }) => await Property.findByPk(id)
  },

  Mutation: {
    createProperty: async (_, args) => await Property.create(args)
  }
}
