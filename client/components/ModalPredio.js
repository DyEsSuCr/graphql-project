import { Modal } from 'antd'

export default function ModalPredio({ toggle, setToggle }) {
  
  return (
    <Modal
      open={toggle}
      title='Crear predio'
      onCancel={() => setToggle(false)}
      onOk={() => console.log('ok')}
    >
      <p>Aqui va el form</p>
    </Modal>
  )
}