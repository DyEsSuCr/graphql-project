import ModalForm from '../ModalForm'
import FormTerreno from '../Forms/FormTerreno'
import { GET_TERRENO, REMOVE_TERRENO } from '../../graphql/terrenos'
import { GET_PREDIO_TERRENO } from '../../graphql/predios'

import { Button } from 'antd'
import { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { List } from './List'

export default function ListTerrenos ({ data, predioId }) {
  const [toggle, setToggle] = useState(false)
  const [removeTerreno] = useMutation(REMOVE_TERRENO, {
    refetchQueries: [
      {
        query: GET_PREDIO_TERRENO,
        variables: {
          id: predioId
        }
      },
      'getPredioTerreno'
    ]
  })

  const { data: terrenoData } = useQuery(GET_TERRENO, {
    variables: {
      id: data.property.terreno?.id
    },
    skip: !data.property.terreno?.id
  })

  return (
    <>
      <List btnMessaje='Registrar terreno' data={data.property.terreno} setToggle={setToggle} errorTitle='No tiene terreno'>
        <h2>Terreno registrado</h2>
        <p>precio comercial: {data.property.terreno?.precio_comercial}</p>
        <p>area: {data.property.terreno?.area}</p>
        <p>tipo_terreno: {data.property.terreno?.tipo_terreno}</p>
        <p>cerca_fuentes: {data.property.terreno?.cerca_fuentes ? 'si' : 'no'}</p>
        <Button type='primary' onClick={() => setToggle(true)}>Editar</Button>
        <Button danger onClick={() => removeTerreno({ variables: { id: data.property.terreno.id } })}>Eliminar</Button>
      </List>

      <ModalForm title='Crear Terreno' toggle={toggle} setToggle={setToggle} predioId={predioId}>
        <FormTerreno setToggle={setToggle} predioId={predioId} updateData={terrenoData} />
      </ModalForm>
    </>

  )
}
