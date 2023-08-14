'use client'

import { Build, Land, Property } from '@/interfaces/propertys.interface'
import { Form as FormAntd, FormInstance } from 'antd'

interface Props {
  form: FormInstance
  name: string
  updateData?: Object
  updateSuccess: (data: Property | Land | Build) => void
  createSuccess: (data: Property | Land | Build) => void
  initialValues: Object
  children: React.ReactNode
}

export function Form ({ form, name, updateData, updateSuccess, createSuccess, initialValues, children }: Props) {
  return (
    <FormAntd
      form={form}
      name={name}
      initialValues={initialValues}
      onFinishFailed={(err) => console.log(err)}
      onFinish={(data: Property) => updateData ? updateSuccess(data) : createSuccess(data)}
    >
      {children}
    </FormAntd>
  )
}
