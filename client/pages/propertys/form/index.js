import { Form, Input } from 'antd'

export default function formPropertys() {
  const {Item} = Form

  const handlerChange = () => {
    console.log('asd')
  }

  return (
    <Form>
      <Item label='Nombre'>
        <Input name='name' placeholder='nombre' onChange={handlerChange}/>
      </Item>

      <Item label='Precio comercial'>
        <Input name='appraisal' placeholder='precio comercial' onChange={handlerChange}/>
      </Item>

      <Item label='Municipio'>
        <Input name='town' placeholder='municipio' onChange={handlerChange}/>
      </Item>

      <Item label='Departamento'>
        <Input name='departament' placeholder='departamento' onChange={handlerChange}/>
      </Item>
    </Form>
  )
}