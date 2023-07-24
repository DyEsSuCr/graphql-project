export default function ListTerrenos({ data }) {
  return (
    <div style={{ border: "1px solid #fff" }}>
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
  )
}