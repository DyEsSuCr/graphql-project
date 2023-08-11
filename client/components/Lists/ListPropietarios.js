import { List } from './List'
import ModalForm from '../ModalForm'

import { Button } from 'antd'
import { useState } from 'react'

export default function ListPropietarios ({ data }) {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <List data={data.property.propietario} btnMessaje='Registrar propietario' errorTitle='No hay propietarios' setToggle={setToggle}>
        <Propietario data={data} />
      </List>

      <ModalForm title='Crear Construccion' toggle={toggle} setToggle={setToggle}>
        <h3>Formulario propietario</h3>
      </ModalForm>
    </>
  )
}

export function Propietario ({ data }) {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3>Propietarios registrados</h3>
        <Button type='primary'>Crear Propietario</Button>
      </div>
      {
        data.property.propietario.map((owner) => (
          <ul key={owner.id} style={{ border: '1px solid #fff' }}>
            <li>{owner.nombres}</li>
            <li>{owner.apellidos}</li>
            <li>{owner.tipo_documento}</li>
            <li>{owner.num_celular}</li>
            <li>{owner.razon_social}</li>
            <li>{owner.direccion}</li>
            <li>{owner.tipo_documento}</li>
            <li>{owner.tipo_propietario}</li>
            <Button type='primary'>Editar</Button>
            <Button danger>Eliminar</Button>
          </ul>
        ))
      }

    </>
  )
}
