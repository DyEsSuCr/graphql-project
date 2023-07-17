import { gql } from '@apollo/client'

export const GET_BUILDS = gql`
{
  builds {
    id
    area
    addres
    floors
    type_build
  }
}
`