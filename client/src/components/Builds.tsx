import { Build } from '@/interfaces/propertys.interface'
import { List } from './List'
import { ModalForm } from './ModalForm'
import { FormBuild } from './Form/FormBuild'

interface Props {
  builds: Build[]
  predioId: string
}

export function Builds ({ builds, predioId }: Props) {
  return (
    <>
      {
        builds <= 0 && (
          <ModalForm title='Registrar terreno'>
            <FormBuild predioId={predioId} />
          </ModalForm>
        )
      }
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
              <FormBuild updateData={build} predioId={predioId} />
            </ModalForm>
          </div>
        ))
      }
      </List>
    </>
  )
}
