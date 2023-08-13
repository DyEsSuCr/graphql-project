import { gql } from '@apollo/client'

export const CREATE_LAND = gql`
  mutation($area: Float!, $precio_comercial: Float!, $cerca_fuentes: Boolean!, $tipo_terreno: TypeLand!, $predioId: ID!) {
    insertLand (area: $area, precio_comercial: $precio_comercial, cerca_fuentes: $cerca_fuentes, tipo_terreno: $tipo_terreno, predioId: $predioId) {
      id
      area
      cerca_fuentes
      precio_comercial
      tipo_terreno
    }
  }
`

export const UPDATE_LAND = gql`
  mutation($id: ID!, $area: Float, $cerca_fuentes: Boolean, $precio_comercial: Float, $tipo_terreno: TypeLand) {
    updateLand(id: $id, area: $area, cerca_fuentes: $cerca_fuentes, precio_comercial: $precio_comercial, tipo_terreno: $tipo_terreno) {
      area
      cerca_fuentes
      id
      precio_comercial
      tipo_terreno
    }
  }
`

export const DELETE_LAND = gql`
  mutation($id: ID!) {
    removeLand(id: $id) {
      area
      cerca_fuentes
      id
      precio_comercial
      tipo_terreno
    }
  }
`
