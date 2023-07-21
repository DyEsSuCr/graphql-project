import { gql } from '@apollo/client'

export const GET_PROPERTYS = gql`
{
  propertys {
    appraisal
    id
    departament
    name
    town
  }
}
`

export const GET_PROPERTY = gql`
query ($id: ID!) {
  property(id: $id) {
    id
    name
    appraisal
    departament
    town
  }
}
`