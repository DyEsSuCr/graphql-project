'use client'

import { Build } from '@/interfaces/propertys.interface'
import { Form } from './Form'
import { Item } from './Item'
import { useState } from 'react'
import { Form as FormAntd } from 'antd'
import { useMutation } from '@apollo/client'
import { CREATE_BUILD, UPDATE_BUILD } from '@/graphql/builds/mutations'

interface Props {
  updateData?: Build
}

export function FormBuild ({ updateData }: Props) {
  const [form] = FormAntd.useForm()
  const [createBuild] = useMutation(CREATE_BUILD)
  const [updateBuild] = useMutation(UPDATE_BUILD)

  const [initialValues] = useState({
    area: updateData?.area ?? '',
    direccion: updateData?.direccion ?? '',
    pisos: updateData?.pisos ?? '',
    tipo_construccion: updateData?.tipo_construccion ?? ''
  })

  const createSuccess = (data: Build) => {
    void createBuild({
      variables: {
        area: Number(data.area),
        direccion: data.direccion,
        pisos: Number(data.pisos),
        tipo_construccion: data.tipo_construccion
      }
    })

    form.resetFields()
  }

  const updateSuccess = (data: Build) => {
    void updateBuild({
      variables: {
        id: updateData?.id,
        area: Number(data.area),
        direccion: data.direccion,
        pisos: Number(data.pisos),
        tipo_construccion: data.tipo_construccion
      }
    })
  }

  return (
    <Form form={form} name='builds' initialValues={initialValues} updateData={updateData} createSuccess={createSuccess} updateSuccess={updateSuccess}>
      <Item typeItem='input' label='Pisos' name='pisos' typeInput='number' />
      <Item typeItem='input' label='Area' name='area' typeInput='number' />
      <Item typeItem='input' label='Direccion' name='direccion' typeInput='text' />
      <Item typeItem='select' options={['COMERCIAL', 'INDUSTRIAL', 'RESIDENCIAL']} label='Tipo de construccion' name='tipo_construccion' />
      <Item typeItem='submit' />
    </Form>
  )
}
