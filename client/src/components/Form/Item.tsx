'use client'

import { Form, Input, Button, Select, Checkbox } from 'antd'

interface Props {
  typeItem: string
  label?: string
  name?: string
  typeInput?: string
  loading?: boolean
  options?: Object | string[]
}

export function Item ({ typeItem, label, name, typeInput, loading, options }: Props) {
  const { Item: ItemAntd } = Form
  const { Option } = Select

  const components = {
    input: (
      <ItemAntd label={label} name={name} rules={[{ required: true, message: 'Campo requerido' }]}>
        <Input type={typeInput} />
      </ItemAntd>
    ),
    select: (
      <ItemAntd label={label} name={name} rules={[{ required: true, message: 'Campo requerido' }]}>
        <Select>
          {options && options.map((option, i) => (
            <Option key={i} value={option}>{option}</Option>
          ))}
        </Select>
      </ItemAntd>
    ),
    submit: (
      <ItemAntd>
        <Button className='bg-blue-700' type='primary' htmlType='submit' disabled={loading}>Crear</Button>
      </ItemAntd>
    ),
    check: (
      <ItemAntd name='cerca_fuentes' valuePropName='checked'>
        <Checkbox>Cerca de fuentes?</Checkbox>
      </ItemAntd>
    ),
    default: <span>Componente no reconocido</span>
  }

  const selectedComponent = components[typeItem] || components.default

  return selectedComponent
}
