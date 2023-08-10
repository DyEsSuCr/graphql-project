import { ADD_CONSTRUCCION, UPDASS } from '../../graphql/construcciones'
import { GET_PREDIO_CONSTRUNCCIONES } from '../../graphql/predios'
import { ItemForm } from './ItemForm'

import { Form } from 'antd'
import { useMutation } from '@apollo/client'

export default function FormConstruccion ({ setToggle, predioId, updateData }) {
  const [form] = Form.useForm()

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

  const [updateConstruccion] = useMutation(UPDASS, {
    variables: {
      id: updateData?.build.id
    },
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

  const createSuccess = (data) => {
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

  const updateSuccess = (data) => {
    updateConstruccion({
      variables: {
        pisos: parseInt(data.pisos),
        area: parseFloat(data.area),
        direccion: data.direccion,
        tipo_construccion: data.tipo_construccion,
        id: updateData.build.id
      }
    })

    setToggle(false)
  }

  const construccionFailed = (err) => console.log(err)

  return (
    <Form
      form={form} name='formulario' onFinish={(data) => updateData ? updateSuccess(data) : createSuccess(data)} onFinishFailed={construccionFailed}
      initialValues={{
        pisos: updateData?.build.pisos || '',
        area: updateData?.build.area || '',
        direccion: updateData?.build.direccion || '',
        tipo_construccion: updateData?.build.tipo_construccion || ''
      }}
    >
      <ItemForm typeItem='input' label='Pisos' name='pisos' typeInput='number' />
      <ItemForm typeItem='input' label='Area' name='area' typeInput='number' />
      <ItemForm typeItem='input' label='Direccion' name='direccion' typeInput='text' />
      <ItemForm typeItem='select' options={['COMERCIAL', 'INDUSTRIAL', 'RESIDENCIAL']} label='Tipo de construccion' name='tipo_construccion' />
      <ItemForm typeItem='submit' loading={loading} />
    </Form>
  )
}
