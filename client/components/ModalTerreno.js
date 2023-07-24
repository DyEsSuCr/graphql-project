import { Modal } from 'antd'
import FormTerreno from './FormTerreno'

export default function ModalTerreno({ toggle, setToggle }) {
  return (
    <Modal open={toggle} title='Crear predio' onCancel={() => setToggle(false)}>
      <FormTerreno setToggle={setToggle} />
    </Modal>
  )
}