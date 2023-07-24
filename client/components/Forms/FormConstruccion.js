import { ADD_CONSTRUCCION } from '../../graphql/construcciones'
import { GET_PREDIO_CONSTRUNCCIONES } from '../../graphql/predios'

import { Form, Input, Button, Select } from 'antd'
import { useMutation } from '@apollo/client'

export default function FormConstruccion({ setToggle, predioId }) {

  const { Item } = Form
  const [form] = Form.useForm()
  const { Option } = Select

  const [insertConstruccion, { loading }] = useMutation(ADD_CONSTRUCCION, {
    refetchQueries: [
      {
        query: GET_PREDIO_CONSTRUNCCIONES,
        variables: {
          id: predioId
        }
      },
      'getPredioConstrucciones'
    ]
  })

  const predioSuccess = (data) => {
    insertConstruccion({
      variables: {
        pisos: parseInt(data.pisos),
        area: parseFloat(data.area),
        direccion: data.direccion,
        tipo_construccion: data.tipo_construccion,
        predioId
      }
    })

    setToggle(false)
    form.resetFields()
  }

  const predioFailed = (err) => console.log(err)

  return (
    <Form form={form} name='formulario' onFinish={predioSuccess} onFinishFailed={predioFailed}>
      <Item label='Pisos' name='pisos' rules={[{ required: true, message: 'Campo requerido' }]}>
        <Input type='number' />
      </Item>

      <Item label='Area' name='area' rules={[{ required: true, message: 'Campo requerido' }]}>
        <Input type='number' />
      </Item>

      <Item label='Direccion' name='direccion' rules={[{ required: true, message: 'Campo requerido' }]}>
        <Input type='text' />
      </Item>

      <Item label='Tipo de construccion' name='tipo_construccion' rules={[{ required: true, message: 'Campo requerido' }]}>
        <Select>
          <Option value='COMERCIAL'>Comercial</Option>
          <Option value='INDUSTRIAL'>Industrial</Option>
          <Option value='RESIDENCIAL'>Residencial</Option>
        </Select>
      </Item>

      <Item>
        <Button type='primary' htmlType='submit' disabled={loading}>Crear</Button>
      </Item>
    </Form>
  )
}