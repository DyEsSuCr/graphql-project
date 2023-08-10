import { Form } from 'antd'

export function FormAndt ({ name, updateData, updateSuccess, createSuccess, initialValues, children }) {
  const [form] = Form.useForm()

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
