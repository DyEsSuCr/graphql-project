import { GET_PREDIO } from '../../graphql/predios'

import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'

export default function Predio() {
  const {query} =  useRouter()
  const {loading, error, data} = useQuery(GET_PREDIO, {
    variables: {
      id: query.id
    }
  })

  if(loading) return <h3>Cargando...</h3>
  if(error) return <h3>Oops hubo un error 😒</h3>

  return (
    <div style={{display: 'flex', gap: '1rem', flexDirection: 'column'}}>
      <h3>Predio {data.property.nombre}</h3>

      <div style={{border: "1px solid #fff"}}>
        {
          !data.property.terreno
          ? (
            <div>
              <h2>No tiene terreno</h2>
              <button>Registrar terreno</button>
            </div>
            )
            
            : (
            <div>
              <h2>Terreno registrado</h2>
              <p>precio comercial: {data.property.terreno.precio_comercial}</p>
              <p>area: {data.property.terreno.area}</p>
              <p>tipo_terreno: {data.property.terreno.tipo_terreno}</p>
              <p>cerca_fuentes: {data.property.terreno.cerca_fuentes ? 'si' : 'no'}</p>
            </div>
          )
        }
      </div>

      <div style={{border: "1px solid #fff"}}>
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
              <h2>Construcciones registradas</h2>
                {
                  data.property.construccion.map((build, i) => (
                    <ul key={build.id} style={{border: "1px solid #fff"}}>
                      <h4>{i+1}</h4>
                      <li>Area: {build.area}</li>
                      <li>Direccion: {build.direccion}</li>
                      <li>Pisos: {build.pisos}</li>
                      <li>Tipo de construccion: {build.tipo_construccion}</li>
                    </ul>
                  ))
                }
            </div>
          )
        }
      </div>


      <div style={{border: "1px solid #fff"}}>
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
              <h3>Propietarios registrados</h3>
              {
                  data.property.propietario.map((owner, i) => (
                    <ul key={owner.id} style={{border: "1px solid #fff"}}>
                      <h4>{i+1}</h4>
                      <li>{owner.nombres}</li>
                      <li>{owner.apellidos}</li>
                      <li>{owner.tipo_documento}</li>
                      <li>{owner.num_celular}</li>
                      <li>{owner.razon_social}</li>
                      <li>{owner.direccion}</li>
                      <li>{owner.tipo_documento}</li>
                      <li>{owner.tipo_propietario}</li>
                    </ul>
                  ))
                }
            </div>
          )
        }
      </div>
    </div>
  )
}