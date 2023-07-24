import { gql } from '@apollo/client'

export const GET_CONSTRUCCION = gql`
  {
    builds {
      id
      area
      pisos
      direccion
      tipo_construccion
    }
  }
`

export const ADD_CONSTRUCCION = gql`
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

export const REMOVE_CONSTRUNCCION = gql`
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