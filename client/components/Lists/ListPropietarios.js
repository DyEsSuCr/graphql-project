export default function ListPropietarios({ data }) {
  return (
    <div style={{ border: "1px solid #fff" }}>
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
                  <ul key={owner.id} style={{ border: "1px solid #fff" }}>
                    <h4>{i + 1}</h4>
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
  )
}