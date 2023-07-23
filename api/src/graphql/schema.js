import { gql } from 'graphql-tag'
import { typeDefs as Build, resolvers as BuildReolvers } from './construcciones.js'
import { typeDefs as Owner, resolvers as OwnerReolvers } from './propietarios.js'
import { typeDefs as Land, resolvers as LandReolvers } from './terrenos.js'
import { typeDefs as Property, resolvers as PropertyReolvers } from './predios.js'

const rootTypeDefs = gql`
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`

export const typeDefs = [rootTypeDefs, Build, Owner, Land, Property]

export const resolvers = [BuildReolvers, OwnerReolvers, LandReolvers, PropertyReolvers]
