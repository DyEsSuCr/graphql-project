import { gql } from '@apollo/client'

export const CREATE_PROPERTY = gql`
  mutation($avaluo: Float!, $nombre: String!, $departamento: String!, $municipio: String!) {
    insertProperty(avaluo: $avaluo, nombre: $nombre, departamento: $departamento, municipio: $municipio) {
      id
      avaluo
      departamento
      nombre
    }
  }
`

export const DELETE_PROPERTY = gql`
  mutation($id: ID!) {
    removeProperty(id: $id) {
      id
      avaluo
      departamento
      nombre
    }
  }
`

export const UPDATE_PROPERTY = gql`
  mutation($id: ID!, $avaluo: Float, $departamento: String, $municipio: String, $nombre: String) {
    updateProperty(id: $id, avaluo: $avaluo, departamento: $departamento, municipio: $municipio, nombre: $nombre) {
      id
      avaluo
      departamento
      nombre
    }
  }
`
