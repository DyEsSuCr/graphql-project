import { GET_PREDIO } from '../../graphql/predios'

import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'

export default function Predio() {
  const {query} =  useRouter()
  const {loading, error, data} = useQuery(GET_PREDIO, {
    variables: {
      id: query.id
    }
  })

  if(loading) return <h3>Cargando...</h3>
  if(error) return <h3>Oops hubo un error 😒</h3>

  console.log(data)

  return (
    <h1>route {query.id}</h1>
  )
}