import { gql } from '@apollo/client'

export const GET_TERRENO = gql`
  query ($landId: ID!) {
    land(id: $landId) {
      id
      area
      cerca_fuentes
      precio_comercial
      tipo_terreno
    } 
  }
`

export const ADD_TERRENO = gql`
  mutation(
    $area: Float!,
    $precioComercial: Float!,
    $cercaFuentes: Boolean!,
    $tipoTerreno: TypeLand!,
    $predioId: ID!
  ) {
    insertLand(
      area: $area,
      precio_comercial: $precioComercial,
      cerca_fuentes: $cercaFuentes,
      tipo_terreno: $tipoTerreno,
      predioId: $predioId
    ) {
      id
      area
      cerca_fuentes
      precio_comercial
      tipo_terreno
    }
  }
`