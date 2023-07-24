import { Modal } from 'antd'

export default function ModalForm({ title, toggle, setToggle, children }) {
  return (
    <Modal open={toggle} title={title} onCancel={() => setToggle(false)} footer={null}>
      {children}
    </Modal>
  )
}