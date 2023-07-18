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
    Propertys: [Property]
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
    Propertys: async () => await Property.findAll()
  },

  Mutation: {
    createProperty: async (_, args) => await Property.create(args)
  }
}
