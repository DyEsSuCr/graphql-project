import { Land } from '@/interfaces/propertys.interface'
import { FormLand } from './Form/FormLand'
import { List } from './List'
import { ModalForm } from './ModalForm'

interface Props {
  land: Land
  predioId: string
}

export function Lands ({ land, predioId }: Props) {
  return (
    <>
      {
        !land && (
          <ModalForm title='Registrar terreno'>
            <FormLand predioId={predioId} />
          </ModalForm>
        )
      }
      <List data={land} errorTitle='NO hay terreno'>
        <h2>Terreno registrado</h2>
        <p>precio comercial: {land?.precio_comercial}</p>
        <p>area: {land?.area}</p>
        <p>tipo_terreno: {land?.tipo_terreno}</p>
        <p>cerca_fuentes: {land?.cerca_fuentes ? 'si' : 'no'}</p>
        <ModalForm title='Editar Terreno'>
          <FormLand updateData={land} predioId={predioId} />
        </ModalForm>
      </List>
    </>
  )
}
