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
    owner: Owner
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

    removeOwner(id: ID!): Owner
  }
`

export const resolvers = {
  Query: {
    owners: async () => await Propietario.findAll(),
    owner: async (_, { id }) => await Propietario.findByPk(id)
  },

  Mutation: {
    insertOwner: async (_, args) => await Propietario.create(args),
    removeOwner: async (_, { id }) => {
      const foundOwner = await Propietario.findByPk(id)
      if (!foundOwner) throw new Error('Propietario no encontrado')

      foundOwner.destroy()
      return foundOwner
    }
  }
}
