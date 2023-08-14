import { Build } from '@/interfaces/propertys.interface'
import { List } from './List'
import { ModalForm } from './ModalForm'
import { FormBuild } from './Form/FormBuild'

export function Builds ({ builds }: { builds: Build[] }) {
  return (
    <List data={builds} errorTitle='NO hay construcciones'>
      <h2>Construcciones registradas</h2>
      {
        builds.map((build) => (
          <div className='border border-white' key={build.id}>
            <p>{build.area}</p>
            <p>{build.direccion}</p>
            <p>{build.pisos}</p>
            <p>{build.tipo_construccion}</p>
            <ModalForm title='Editar Construccion'>
              <FormBuild updateData={build} />
            </ModalForm>
          </div>
        ))
      }
    </List>
  )
}
