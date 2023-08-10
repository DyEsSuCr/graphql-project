import { Button } from 'antd'

export default function ListPropietarios ({ data }) {
  return (
    <div style={{ border: '1px solid #fff' }}>
      {
        data.property.propietario <= 0
          ? (
            <div>
              <h2>No tiene Propietarios</h2>
              <button>Registrar propietario</button>
            </div>
            )

          : (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3>Propietarios registrados</h3>
                <Button type='primary'>Crear Propietario</Button>
              </div>
              {
                data.property.propietario.map((owner, i) => (
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
            </div>
            )
      }
    </div>
  )
}
