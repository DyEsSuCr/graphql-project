import { Form, Input, Button } from 'antd'

export default function ModalPredio() {
  const { Item } = Form
  const predioSuccess = (data) => console.log(data)
  const predioFailed = (err) => console.log(err)

  return (
    <Form name='formulario' onFinish={predioSuccess} onFinishFailed={predioFailed}>
      <Item label='Nombre' name='nombre' rules={[{ required: true, message: 'Campo requerido' }]}>
        <Input type='text' />
      </Item>

      <Item label='Avaluo' name='avaluo' rules={[{ required: true, message: 'Campo requerido' }]}>
        <Input type='number' />
      </Item>

      <Item label='Municipio' name='municipio' rules={[{ required: true, message: 'Campo requerido' }]}>
        <Input type='text' />
      </Item>

      <Item label='Departamento' name='departamento' rules={[{ required: true, message: 'Campo requerido' }]}>
        <Input type='text' />
      </Item>

      <Item>
        <Button type='primary' htmlType='submit'>Crear</Button>
      </Item>
    </Form>
  )
}