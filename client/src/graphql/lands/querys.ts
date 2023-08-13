import { gql } from '@apollo/client'

export const GET_TERRENO = gql`
  query ($id: ID!) {
    land(id: $id) {
      id
      area
      cerca_fuentes
      precio_comercial
      tipo_terreno
    } 
  }
`
