import { GET_PREDIO } from '../../graphql/predios'

import ListTerrenos from '../../components/Lists/ListTerrenos'
import ListConstrucciones from '../../components/Lists/ListConstrucciones'
import ListPropietarios from '../../components/Lists/ListPropietarios'

import { useRouter } from 'next/router'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { Button } from 'antd'

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
      <div className='predioHeader'>
        <Link href={'/'} style={{ fontSize: '28px', cursor: 'pointer' }}>🔙</Link>
        <h3>Nombre predio: {data.property.nombre}</h3>
        <div>
          <Button type='primary'>Editar</Button>
          <Button danger>Eliminar</Button>
        </div>
      </div>
      <span>Avaluo: ${data.property.avaluo}</span>
      <span>Departamento: {data.property.departamento}</span>
      <span>Municipio: {data.property.municipio}</span>

      <ListTerrenos data={data} predioId={query.id} />
      <ListConstrucciones data={data} predioId={query.id} />
      <ListPropietarios data={data} predioId={query.id} />
    </div>
  )
}