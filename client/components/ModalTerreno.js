import { Modal } from 'antd'
import FormTerreno from './Forms/FormTerreno'

export default function ModalTerreno({ title, toggle, setToggle, predioId }) {
  return (
    <Modal open={toggle} title={title} onCancel={() => setToggle(false)} footer={null}>
      <FormTerreno setToggle={setToggle} predioId={predioId} />
    </Modal>
  )
}