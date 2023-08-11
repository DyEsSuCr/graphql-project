import { GET_PREDIO, REMOVE_PREDIO, GET_PREDIOS } from '../../graphql/predios'

import ListTerrenos from '../../components/Lists/ListTerrenos'
import ListConstrucciones from '../../components/Lists/ListConstrucciones'
import ListPropietarios from '../../components/Lists/ListPropietarios'

import ModalForm from '../../components/ModalForm'
import FormPredio from '../../components/Forms/FormPredio'
import HeaderPredio from '../../components/HeaderPredio'

import { useQuery, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'

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
      <HeaderPredio data={data} removeOnePredio={removeOnePredio} setToggle={setToggle} predioId={query.id} />

      <ListTerrenos data={data} predioId={query.id} />
      <ListConstrucciones data={data} predioId={query.id} />
      <ListPropietarios data={data} predioId={query.id} />

      <ModalForm title='Actualizar predio' toggle={toggle} setToggle={setToggle}>
        <FormPredio setToggle={setToggle} predioId={query.id} updateData={data} />
      </ModalForm>
    </div>
  )
}
