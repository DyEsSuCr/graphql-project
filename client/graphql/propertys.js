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
