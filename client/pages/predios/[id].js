import { GET_PREDIO } from '../../graphql/predios'
import ListTerreno from '../../components/Lists/ListTerrenos'
import ListConstrucciones from '../../components/Lists/ListConstrucciones'
import ListPropietarios from '../../components/Lists/ListPropietarios'

import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'

export default function Predio() {
  const { query } = useRouter()
  const { loading, error, data } = useQuery(GET_PREDIO, {
    variables: {
      id: query.id
    }
  })

  if (loading) return <h3>Cargando...</h3>
  if (error) return <h3>Oops hubo un error 😒</h3>

  return (
    <div style={{ display: 'flex', gap: '2rem', flexDirection: 'column' }}>
      <h3>Nombre predio: {data.property.nombre}</h3>
      <span>Avaluo: ${data.property.avaluo}</span>
      <span>Departamento: {data.property.departamento}</span>
      <span>Municipio: {data.property.municipio}</span>

      <ListTerreno data={data} />
      <ListConstrucciones data={data} />
      <ListPropietarios data={data} />
    </div>
  )
}