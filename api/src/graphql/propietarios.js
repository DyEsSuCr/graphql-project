import gql from 'graphql-tag'
import { Propietario } from '../models/index.js'

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
    num_documento: String
    nombres: String
    apellidos: String
    direccion: String
    num_celular: String
    correo: String
    NIT: String
    razon_social: String
    tipo_propietario: TypeOwner
    tipo_documento: TypeDocument
  }

  extend type Query {
    owners: [Owner]
  }

  extend type Mutation {
    insertOwner(
      num_documento: String!
      nombres: String!
      apellidos: String!
      direccion: String!
      num_celular: String!
      correo: String
      NIT: String!
      razon_social: String!
      tipo_propietario: TypeOwner!
      tipo_documento: TypeDocument!
      predioId: ID!
    ): Owner
  }
`

export const resolvers = {
  Query: {
    owners: async () => await Propietario.findAll()
  },

  Mutation: {
    insertOwner: async (_, args) => await Propietario.create(args)
  }
}
