import { gql } from 'graphql-tag'
import { typeDefs as Build, resolvers as BuildReolvers } from './builds.js'
import { typeDefs as Owner, resolvers as OwnerReolvers } from './owners.js'

const rootTypeDefs = gql`
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`

export const typeDefs = [rootTypeDefs, Build, Owner]

export const resolvers = [BuildReolvers, OwnerReolvers]
