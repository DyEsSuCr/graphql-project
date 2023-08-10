import { ADD_PREDIO, GET_PREDIOS, UPDATE_PREDIO } from '../../graphql/predios'
import { ItemForm } from './ItemForm'

import { Form } from 'antd'
import { useMutation } from '@apollo/client'

export default function FormPredio ({ setToggle, updateData }) {
  const [form] = Form.useForm()

  const [insertPredio, { loading }] = useMutation(ADD_PREDIO, {
    refetchQueries: [
      {
        query: GET_PREDIOS
      },
      'getPredios'
    ]
  })

  const [updatePredio] = useMutation(UPDATE_PREDIO, {
    variables: {
      id: updateData?.property.id
    },
    refetchQueries: [
      {
        query: GET_PREDIOS
      },
      'getPredios'
    ]
  })

  const createSuccess = (data) => {
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

  const updateSuccess = (data) => {
    updatePredio({
      variables: {
        nombre: data.nombre,
        avaluo: parseFloat(data.avaluo),
        municipio: data.municipio,
        departamento: data.departamento
      }
    })

    setToggle(false)
  }

  const predioFailed = (err) => console.log(err)

  return (
    <Form
      form={form}
      name='formulario'
      onFinish={(data) => updateData ? updateSuccess(data) : createSuccess(data)}
      onFinishFailed={predioFailed}
      initialValues={{
        nombre: updateData?.property.nombre || '',
        avaluo: updateData?.property.avaluo || '',
        municipio: updateData?.property.municipio || '',
        departamento: updateData?.property.departamento || ''
      }}
    >
      <ItemForm typeItem='input' label='Nombre' name='nombre' typeInput='text' />
      <ItemForm typeItem='input' label='Avaluo' name='avaluo' typeInput='number' />
      <ItemForm typeItem='input' label='Municipio' name='municipio' typeInput='text' />
      <ItemForm typeItem='input' label='Departamento' name='departamento' typeInput='text' />
      <ItemForm typeItem='submit' loading={loading} />
    </Form>
  )
}
