import { Modal } from 'antd'
import FormPredio from './FormPredio'

export default function ModalPredio({ toggle, setToggle }) {
  return (
    <Modal open={toggle} title='Crear predio' onCancel={() => setToggle(false)}>
      <FormPredio />
    </Modal>
  )
}