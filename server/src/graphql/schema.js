import { gql } from 'graphql-tag'
import { typeDefs as Build, resolvers as BuildReolvers } from './builds.js'

const rootTypeDefs = gql`
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`

export const typeDefs = [rootTypeDefs, Build]

export const resolvers = [BuildReolvers]
