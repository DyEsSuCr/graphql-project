'use client'

import { Modal, Button } from 'antd'
import { useState } from 'react'

interface Props {
  title: string
  children?: React.ReactNode
}

export const ModalForm = ({ title, children }: Props) => {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <Button className='bg-blue-700' type='primary' onClick={() => setToggle(!toggle)}>
        {title}
      </Button>
      <Modal open={toggle} title={title} onCancel={() => setToggle(false)} footer={null}>
        {children}
      </Modal>
    </>
  )
}
