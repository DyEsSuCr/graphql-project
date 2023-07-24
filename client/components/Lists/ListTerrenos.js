import ModalForm from '../ModalForm'
import FormTerreno from '../Forms/FormTerreno'

import { Button } from 'antd'
import { useState } from 'react'

export default function ListTerrenos({ data, predioId }) {
  const [toggle, setToggle] = useState(false)

  return (
    <div style={{ border: "1px solid #fff" }}>
      {
        !data.property.terreno
          ? (
            <div>
              <h2>No tiene terreno</h2>
              <Button type='primary' onClick={() => setToggle(true)}>Registrar terreno</Button>
            </div>
          )

          : (
            <div>
              <h2>Terreno registrado</h2>
              <p>precio comercial: {data.property.terreno.precio_comercial}</p>
              <p>area: {data.property.terreno.area}</p>
              <p>tipo_terreno: {data.property.terreno.tipo_terreno}</p>
              <p>cerca_fuentes: {data.property.terreno.cerca_fuentes ? 'si' : 'no'}</p>
              <Button type='primary'>Editar</Button>
              <Button danger>Eliminar</Button>
            </div>
          )
      }

      <ModalForm title='Crear Terreno' toggle={toggle} setToggle={setToggle} predioId={predioId} >
        <FormTerreno setToggle={setToggle} predioId={predioId} />
      </ModalForm>
    </div>
  )
}