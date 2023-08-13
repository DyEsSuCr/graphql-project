import { gql } from '@apollo/client'

export const GET_PROPERTYS = gql`
  query {
    propertys {
      id
      nombre
      avaluo
      municipio
      departamento
    }
  }
`

export const GET_PROPERTY = gql`
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

export const GET_PROPERTY_LAND = gql`
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

export const GET_PROPERTY_BUILD = gql`
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
