import ModalForm from '../ModalForm'
import FormConstruccion from '../Forms/FormConstruccion'
import { REMOVE_CONSTRUNCCION } from '../../graphql/construcciones'
import { GET_PREDIO_CONSTRUNCCIONES } from '../../graphql/predios'

import { useState } from 'react'
import { Button } from 'antd'
import { useMutation } from '@apollo/client'

export default function ListContrucciones({ data, predioId }) {
  const [toggle, setToggle] = useState(false)

  const [removeConstruccion] = useMutation(REMOVE_CONSTRUNCCION, {
    refetchQueries: [
      {
        query: GET_PREDIO_CONSTRUNCCIONES,
        variables: {
          id: predioId
        }
      },
      'getPredioContruccion'
    ]
  })

  return (
    <div style={{ border: "1px solid #fff" }}>
      {
        data.property.construccion <= 0
          ? (
            <div>
              <h2>No tiene Construcciones</h2>
              <Button type='primary' onClick={() => setToggle(true)}>Crear construccion</Button>
            </div>
          )

          : (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2>Construcciones registradas</h2>
                <Button type='primary' onClick={() => setToggle(true)}>Crear construccion</Button>
              </div>
              {
                data.property.construccion.map((build, i) => (
                  <ul key={build.id} style={{ border: "1px solid #fff" }}>
                    <li>Area: {build.area}</li>
                    <li>Direccion: {build.direccion}</li>
                    <li>Pisos: {build.pisos}</li>
                    <li>Tipo de construccion: {build.tipo_construccion}</li>
                    <Button type='primary'>Editar</Button>
                    <Button danger onClick={() => removeConstruccion({ variables: { id: build.id } })}>Eliminar</Button>
                  </ul>
                ))
              }
            </div>
          )
      }

      <ModalForm title='Crear Construccion' toggle={toggle} setToggle={setToggle} predioId={predioId} >
        <FormConstruccion setToggle={setToggle} predioId={predioId} />
      </ModalForm>
    </div>
  )
}