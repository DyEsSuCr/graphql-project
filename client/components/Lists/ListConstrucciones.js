import { Button } from 'antd'

export default function ListContrucciones({ data }) {
  return (
    <div style={{ border: "1px solid #fff" }}>
      {
        data.property.construccion <= 0
          ? (
            <div>
              <h2>No tiene Construcciones</h2>
              <button>Registrar construccion</button>
            </div>
          )

          : (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2>Construcciones registradas</h2>
                <Button type='primary'>Crear construccion</Button>
              </div>
              {
                data.property.construccion.map((build, i) => (
                  <ul key={build.id} style={{ border: "1px solid #fff" }}>
                    <li>Area: {build.area}</li>
                    <li>Direccion: {build.direccion}</li>
                    <li>Pisos: {build.pisos}</li>
                    <li>Tipo de construccion: {build.tipo_construccion}</li>
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