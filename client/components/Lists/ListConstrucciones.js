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
              <h2>Construcciones registradas</h2>
              {
                data.property.construccion.map((build, i) => (
                  <ul key={build.id} style={{ border: "1px solid #fff" }}>
                    <h4>{i + 1}</h4>
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
  )
}