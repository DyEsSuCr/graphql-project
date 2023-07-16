import { gql } from 'graphql-tag'

export const resolvers = {
  Query: {
    hello: () => 'hola'
  }

}

export const typeDefs = gql`
  type Query {
    hello: String
  }
`