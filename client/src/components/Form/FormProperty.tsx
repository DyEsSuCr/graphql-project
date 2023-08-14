'use client'

import { CREATE_PROPERTY, UPDATE_PROPERTY } from '@/graphql/propertys/mutations'
import { Property } from '@/interfaces/propertys.interface'
import { Form } from './Form'
import { Item } from './Item'
import { useState } from 'react'
import { Form as FormAntd } from 'antd'
import { useMutation } from '@apollo/client'
import { GET_PROPERTYS } from '@/graphql/propertys/querys'

interface Props {
  updateData?: Property
}

export function FormProperty ({ updateData }: Props) {
  const [form] = FormAntd.useForm()

  const [createProperty] = useMutation(CREATE_PROPERTY, {
    refetchQueries: [
      {
        query: GET_PROPERTYS
      },
      'GET_PROPERTYS'
    ],
    awaitRefetchQueries: true
  })

  const [updateProperty] = useMutation(UPDATE_PROPERTY, {
    refetchQueries: [
      {
        query: GET_PROPERTYS
      },
      'GET_PROPERTYS'
    ],
    awaitRefetchQueries: true
  })

  const [initialValues] = useState({
    nombre: updateData?.nombre ?? '',
    avaluo: updateData?.avaluo ?? '',
    municipio: updateData?.municipio ?? '',
    departamento: updateData?.departamento ?? ''
  })

  const createSuccess = (data: Property) => {
    void createProperty({
      variables: {
        nombre: data.nombre,
        avaluo: Number(data.avaluo),
        municipio: data.municipio,
        departamento: data.departamento
      }
    })

    form.resetFields()
  }

  const updateSuccess = (data: Property) => {
    void updateProperty({
      variables: {
        id: updateData?.id,
        nombre: data.nombre,
        avaluo: Number(data.avaluo),
        municipio: data.municipio,
        departamento: data.departamento
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
