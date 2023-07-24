import { Modal } from 'antd'
import FormPredio from './Forms/FormPredio'

export default function ModalPredio({ toggle, setToggle }) {
  return (
    <Modal open={toggle} title='Crear predio' onCancel={() => setToggle(false)} footer={null}>
      <FormPredio setToggle={setToggle} />
    </Modal>
  )
}