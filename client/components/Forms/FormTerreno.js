import { ADD_PREDIO, GET_PREDIOS } from '../../graphql/predios'

import { Form, Input, Button } from 'antd'
import { useMutation } from '@apollo/client'

export default function ModalPredio({ setToggle }) {

  const { Item } = Form
  const [form] = Form.useForm()

  const [insertPredio, { loading }] = useMutation(ADD_PREDIO, {
    refetchQueries: [
      {
        query: GET_PREDIOS
      },
      'getPredios'
    ]
  })

  const predioSuccess = (data) => {
    insertPredio({
      variables: {
        nombre: data.nombre,
        avaluo: parseFloat(data.avaluo),
        municipio: data.municipio,
        departamento: data.departamento
      }
    })

    setToggle(false)
    form.resetFields()
  }

  const predioFailed = (err) => console.log(err)

  return (
    <Form form={form} name='formulario' onFinish={predioSuccess} onFinishFailed={predioFailed}>
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
        <Button type='primary' htmlType='submit' disabled={loading}>Crear</Button>
      </Item>
    </Form>
  )
}