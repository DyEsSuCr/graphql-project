import { useQuery } from '@apollo/client'
import { GET_BUILDS } from '../../graphql/builds'

export default function BuildList () {

  const {loading, error, data} = useQuery(GET_BUILDS)

  if (loading) return <span>loading...</span>

  if (error) return <p>Opps</p>

  return (
    <div>
      <h1>Contrucciones</h1>
      {
        data.builds.map(build => (
          <div key={build.id}>
            <p>Area: {build.area}</p>
            <p>Direccion: {build.addres}</p>
            <p>Pisos: {build.floors}</p>
            <p>Tipo de contruccion: {build.type_build}</p>
          </div>
        ))
      }
    </div>
  )
}