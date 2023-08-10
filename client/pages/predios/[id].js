import { GET_PREDIO, REMOVE_PREDIO, GET_PREDIOS } from '../../graphql/predios'

import ListTerrenos from '../../components/Lists/ListTerrenos'
import ListConstrucciones from '../../components/Lists/ListConstrucciones'
import ListPropietarios from '../../components/Lists/ListPropietarios'

import ModalForm from '../../components/ModalForm'
import FormPredio from '../../components/Forms/FormPredio'

import { useRouter } from 'next/router'
import { useQuery, useMutation } from '@apollo/client'
import { Button } from 'antd'
import { useState } from 'react'
import Link from 'next/link'

export default function Predio () {
  const [toggle, setToggle] = useState(false)

  const { query, push } = useRouter()
  const { loading, error, data } = useQuery(GET_PREDIO, {
    variables: {
      id: query.id
    }
  })

  const [removePredio] = useMutation(REMOVE_PREDIO, {
    refetchQueries: [
      {
        query: GET_PREDIOS
      },
      'getPredios'
    ]
  })

  const removeOnePredio = (id) => {
    removePredio({ variables: { id } })
    push('/')
  }

  if (loading) return <div className='lds-dual-ring' />
  if (error) return <h3>Oops hubo un error 😒</h3>

  return (
    <div style={{ display: 'flex', gap: '2rem', flexDirection: 'column' }}>
      <div className='predioHeader'>
        <Link href='/' style={{ fontSize: '28px', cursor: 'pointer' }}>🔙</Link>
        <h3>Nombre predio: {data.property.nombre}</h3>
        <div>
          <Button type='primary' onClick={() => setToggle(true)}>Editar</Button>
          <Button danger onClick={() => removeOnePredio(query.id)}>Eliminar</Button>
        </div>
      </div>
      <span>Avaluo: ${data.property.avaluo}$</span>
      <span>Departamento: {data.property.departamento}</span>
      <span>Municipio: {data.property.municipio}</span>

      <ListTerrenos data={data} predioId={query.id} />
      <ListConstrucciones data={data} predioId={query.id} />
      <ListPropietarios data={data} predioId={query.id} />

      <ModalForm title='Actualizar predio' toggle={toggle} setToggle={setToggle}>
        <FormPredio setToggle={setToggle} predioId={query.id} updateData={data} />
      </ModalForm>
    </div>
  )
}
