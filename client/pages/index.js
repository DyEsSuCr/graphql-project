import { useQuery } from '@apollo/client'
import { GET_PREDIOS } from '../graphql/predios'

export default function Home() {

  const { loading, error, data } =  useQuery(GET_PREDIOS)

  if(loading) return <h3>Cargando...</h3>
  if(error) return <h3>Oops hubo un error 😒</h3>

  return (
    JSON.stringify(data.propertys)
  )
}
