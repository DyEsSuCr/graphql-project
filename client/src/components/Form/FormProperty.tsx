'use client'

import { CREATE_PROPERTY, UPDATE_PROPERTY } from '@/graphql/propertys/mutations'
import { Property } from '@/interfaces/propertys.interface'
import { Form } from './Form'
import { Item } from './Item'
import { useState } from 'react'
import { Form as FormAntd } from 'antd'
import { useMutation } from '@apollo/client'

interface Props {
  updateData?: Property
}

export function FormProperty ({ updateData }: Props) {
  const [form] = FormAntd.useForm()
  const [createProperty] = useMutation(CREATE_PROPERTY)
  const [updateProperty] = useMutation(UPDATE_PROPERTY)

  const [initialValues] = useState({
    nombre: updateData?.nombre ?? '',
    avaluo: updateData?.avaluo ?? '',
    municipio: updateData?.municipio ?? '',
    departamento: updateData?.departamento ?? ''
  })

  const createSuccess = (data: Property) => {
    void createProperty({
      variables: {
        nombre: data.municipio,
        avaluo: Number(data.avaluo),
        municipio: data.municipio,
        departamento: data.municipio
      }
    })

    form.resetFields()
  }

  const updateSuccess = (data: Property) => {
    void updateProperty({
      variables: {
        id: updateData?.id,
        nombre: data.municipio,
        avaluo: Number(data.avaluo),
        municipio: data.municipio,
        departamento: data.municipio
      }
    })
  }

  return (
    <Form form={form} name='property' initialValues={initialValues} updateData={updateData} createSuccess={createSuccess} updateSuccess={updateSuccess}>
      <Item typeItem='input' label='Nombre' name='nombre' typeInput='text' />
      <Item typeItem='input' label='Avaluo' name='avaluo' typeInput='number' />
      <Item typeItem='input' label='Municipio' name='municipio' typeInput='text' />
      <Item typeItem='input' label='Departamento' name='departamento' typeInput='text' />
      <Item typeItem='submit' />
    </Form>
  )
}
