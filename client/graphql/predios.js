import { gql } from '@apollo/client'

export const GET_PREDIOS = gql`
  {
    propertys {
      id
      nombre
      avaluo
      municipio
      departamento
    }
  }
`

export const GET_PREDIO = gql`
  query ($id: ID!) {
    property(id: $id) {
      avaluo
      departamento
      id
      municipio
      nombre
      terreno {
        area
        cerca_fuentes
        id
        precio_comercial
        tipo_terreno
      }
      construccion {
        area
        direccion
        id
        pisos
        tipo_construccion
      }
      propietario {
        apellidos
        correo
        direccion
        id
        NIT
        nombres
        num_celular
        num_documento
        razon_social
        tipo_documento
        tipo_propietario
      }
    }
  }
`

export const GET_PREDIO_TERRENO = gql`
  query ($id: ID!) {
    property(id: $id) {
      terreno {
        area
        cerca_fuentes
        id
        precio_comercial
        tipo_terreno
      }
    }
  }
`

export const UPDATE_PREDIO = gql`
  mutation($id: ID!, $avaluo: Float, $departamento: String, $municipio: String, $nombre: String) {
    updateProperty(id: $id, avaluo: $avaluo, departamento: $departamento, municipio: $municipio, nombre: $nombre) {
      id
      avaluo
      departamento
      nombre
    }
  }
`

export const GET_PREDIO_CONSTRUNCCIONES = gql`
  query ($id: ID!) {
    property(id: $id) {
      construccion {
        id
        area
        pisos
        direccion
        tipo_construccion
      }
    }
  }
`

export const ADD_PREDIO = gql`
  mutation($avaluo: Float!, $nombre: String!, $departamento: String!, $municipio: String!) {
    insertProperty(avaluo: $avaluo, nombre: $nombre, departamento: $departamento, municipio: $municipio) {
      id
      avaluo
      departamento
      nombre
    }
  }
`

export const REMOVE_PREDIO = gql`
  mutation($id: ID!) {
    removeProperty(id: $id) {
      id
      avaluo
      departamento
      nombre
    }
  }
`