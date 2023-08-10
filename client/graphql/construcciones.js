import { gql } from '@apollo/client'

export const GET_CONSTRUCCION = gql`
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

export const UPDASS = gql`
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
