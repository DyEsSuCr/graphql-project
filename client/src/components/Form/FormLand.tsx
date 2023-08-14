'use client'

import { Land } from '@/interfaces/propertys.interface'
import { Form } from './Form'
import { Item } from './Item'
import { useState } from 'react'
import { Form as FormAntd } from 'antd'
import { useMutation } from '@apollo/client'
import { CREATE_LAND, UPDATE_LAND } from '@/graphql/lands/mutations'
import { GET_PROPERTY_LAND } from '@/graphql/propertys/querys'

interface Props {
  updateData?: Land
  predioId: string
}

export function FormLand ({ updateData, predioId }: Props) {
  const [form] = FormAntd.useForm()

  const [createLand] = useMutation(CREATE_LAND, {
    refetchQueries: [
      {
        query: GET_PROPERTY_LAND,
        variables: {
          id: predioId
        }
      },
      'GET_PROPERTY_LAND'
    ],
    awaitRefetchQueries: true
  })
  const [updateLand] = useMutation(UPDATE_LAND, {
    refetchQueries: [
      {
        query: GET_PROPERTY_LAND,
        variables: {
          id: predioId
        }
      },
      'GET_PROPERTY_LAND'
    ],
    awaitRefetchQueries: true
  })

  const [initialValues] = useState({
    area: updateData?.area ?? '',
    cerca_fuentes: updateData?.cerca_fuentes ?? '',
    precio_comercial: updateData?.precio_comercial ?? '',
    tipo_terreno: updateData?.tipo_terreno ?? ''
  })

  const createSuccess = (data: Land) => {
    void createLand({
      variables: {
        area: Number(data.area),
        cerca_fuentes: data.cerca_fuentes,
        precio_comercial: Number(data.precio_comercial),
        tipo_terreno: data.tipo_terreno,
        predioId
      }
    })

    form.resetFields()
  }

  const updateSuccess = (data: Land) => {
    void updateLand({
      variables: {
        id: updateData?.id,
        area: Number(data.area),
        cerca_fuentes: data.cerca_fuentes,
        precio_comercial: Number(data.precio_comercial),
        tipo_terreno: data.tipo_terreno
      }
    })
  }

  return (
    <Form form={form} name='lands' initialValues={initialValues} updateData={updateData} createSuccess={createSuccess} updateSuccess={updateSuccess}>
      <Item typeItem='input' label='Area' name='area' typeInput='number' />
      <Item typeItem='input' label='Precio' name='precio_comercial' typeInput='number' />
      <Item typeItem='select' options={['RURAL', 'URBANO']} label='Tipo de terreno' name='tipo_terreno' />
      <Item typeItem='check' label='Cerca de fuentes' name='cerca_fuentes' />
      <Item typeItem='submit' />
    </Form>
  )
}
