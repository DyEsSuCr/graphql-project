import { Modal } from 'antd'
import FormConstruccion from './Forms/FormConstruccion'

export default function ModalConstruccion({ title, toggle, setToggle, predioId }) {
  return (
    <Modal open={toggle} title={title} onCancel={() => setToggle(false)} footer={null}>
      <FormConstruccion setToggle={setToggle} predioId={predioId} />
    </Modal>
  )
}