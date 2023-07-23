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
    }
    construccion {
      direccion
    }
    propietario {
      nombres
    }
  }
}
`