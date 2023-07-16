import gql from 'graphql-tag'

export const typeDefs = gql`
  type Build {
    id: ID
    floors: Int
    area: Int
    addres: String
    type_build: String 
  }

  extend type Query {
    builds: [Build]
  }

  extend type Mutation {
    createBuild(name: String): String
  }
`

export const resolvers = {
  Query: {
    builds: () => []
  },

  Mutation: {
    createBuild: () => 'created build'
  }
}
