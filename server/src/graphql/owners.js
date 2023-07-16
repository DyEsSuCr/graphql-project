import gql from 'graphql-tag'
import { Owner } from '../models/index.js'

export const typeDefs = gql`
  enum TypeOwner {
    NATURAL
    JURIDICO
  }

  enum TypeDocument {
    CC
    TI
    DI
    CI
    DNI
  }

  type Owner {
    id: ID
    num_document: String
    name: String
    lastname: String
    addres: String
    num_phone: String
    email: String
    NIT: String
    business_name: String
    type_owner: TypeOwner
    type_document: TypeDocument
  }

  extend type Query {
    owners: [Owner]
  }

  extend type Mutation {
    createOwner(
      num_document: String
      name: String!
      lastname: String
      addres: String
      num_phone: String
      email: String
      NIT: String
      business_name: String
      type_owner: TypeOwner
      type_document: TypeDocument
    ): Owner
  }
`

export const resolvers = {
  Query: {
    owners: async () => await Owner.findAll()
  },

  Mutation: {
    createOwner: async (_, args) => await Owner.create(args)
  }
}
