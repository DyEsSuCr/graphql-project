import { gql } from '@apollo/client'

export const CREATE_BUILD = gql`
  mutation($pisos: Int!, $area: Float!, $direccion: String!, $tipo_construccion: TypeBuild!, $predioId: ID!) {
    insertBuild(pisos: $pisos, area: $area, direccion: $direccion, tipo_construccion: $tipo_construccion, predioId: $predioId) {
      id
      area
      pisos
      direccion
      tipo_construccion
    }
  }
`

export const UPDATE_BUILD = gql`
  mutation($id: ID!, $pisos: Int, $area: Float, $direccion: String, $tipo_construccion: TypeBuild) {
    updateBuild(id: $id, pisos: $pisos, area: $area, direccion: $direccion, tipo_construccion: $tipo_construccion) {
      id
      area
      pisos 
      direccion
      tipo_construccion
    }
  }
`

export const REMOVE_BUILD = gql`
  mutation($id: ID!) {
    removeBuild(id: $id) {
      id
      area
      pisos
      direccion
      tipo_construccion
    }
  }
`
