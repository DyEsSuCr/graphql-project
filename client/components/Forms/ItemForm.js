import { Form, Input, Button, Select, Checkbox } from 'antd'

export function ItemForm ({ typeItem, label, name, typeInput, loading, options }) {
  const { Item } = Form
  const { Option } = Select

  const components = {
    input: (
      <Item label={label} name={name} rules={[{ required: true, message: 'Campo requerido' }]}>
        <Input type={typeInput} />
      </Item>
    ),
    select: (
      <Item label={label} name={name} rules={[{ required: true, message: 'Campo requerido' }]}>
        <Select>
          {options && options.map((option, i) => (
            <Option key={i} value={option}>{option}</Option>
          ))}
        </Select>
      </Item>
    ),
    submit: (
      <Item>
        <Button type='primary' htmlType='submit' disabled={loading}>Crear</Button>
      </Item>
    ),
    check: (
      <Item name='cerca_fuentes' valuePropName='checked'>
        <Checkbox>Cerca de fuentes?</Checkbox>
      </Item>
    ),
    default: <span>Componente no reconocido</span>
  }

  const selectedComponent = components[typeItem] || components.default

  return selectedComponent
}
