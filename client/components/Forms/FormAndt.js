import { Form } from 'antd'

export function FormAndt ({ form, name, updateData, updateSuccess, createSuccess, initialValues, children }) {
  return (
    <Form
      form={form}
      name={name}
      onFinish={(data) => updateData ? updateSuccess(data) : createSuccess(data)}
      onFinishFailed={(err) => console.log(err)}
      initialValues={initialValues}
    >
      {children}
    </Form>
  )
}
