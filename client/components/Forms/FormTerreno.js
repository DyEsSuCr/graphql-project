import { ADD_TERRENO } from '../../graphql/terrenos'
import { GET_PREDIO_TERRENO } from '../../graphql/predios'

import { Form, Input, Button, Checkbox, Select } from 'antd'
import { useMutation } from '@apollo/client'

export default function FormTerreno({ setToggle, predioId }) {

  const { Item } = Form
  const [form] = Form.useForm()
  const { Option } = Select

  const [insertTerreno, { loading }] = useMutation(ADD_TERRENO, {
    refetchQueries: [
      {
        query: GET_PREDIO_TERRENO,
        variables: {
          id: predioId
        }
      },
      'getPredioTerreno'
    ]
  })

  const terenoSuccess = (data) => {
    insertTerreno({
      variables: {
        area: parseFloat(data.area),
        cerca_fuentes: data.cerca_fuentes,
        precio_comercial: parseFloat(data.precio_comercial),
        tipo_terreno: data.tipo_terreno,
        predioId
      }
    })

    setToggle(false)
    form.resetFields()
  }

  const terrenoFailed = (err) => console.log(err)

  return (
    <Form form={form} name='formulario' onFinish={terenoSuccess} onFinishFailed={terrenoFailed} initialValues={{
      cerca_fuentes: false
    }}>
      <Item label='Area' name='area' rules={[{ required: true, message: 'Campo requerido' }]}>
        <Input type='number' />
      </Item>

      <Item label='Precio comercial' name='precio_comercial' rules={[{ required: true, message: 'Campo requerido' }]}>
        <Input type='number' />
      </Item>

      <Item label='Tipo de terreno' name='tipo_terreno'>
        <Select>
          <Option value='RURAL'>Rural</Option>
          <Option value='URBANO'>Urbano</Option>
        </Select>
      </Item>

      <Item name='cerca_fuentes' valuePropName='checked'>
        <Checkbox>Cerca de fuentes?</Checkbox>
      </Item>

      <Item>
        <Button type='primary' htmlType='submit' disabled={loading}>Crear</Button>
      </Item>
    </Form>
  )
}