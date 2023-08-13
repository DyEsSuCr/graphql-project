import { gql } from '@apollo/client'

export const GET_BUILD = gql`
  query ($id: ID!) {
    build(id: $id) {
      id
      area
      pisos
      direccion
      tipo_construccion
    }
  }
`
