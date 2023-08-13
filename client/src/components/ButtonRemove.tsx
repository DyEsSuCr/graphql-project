'use client'

import { DELETE_PROPERTY } from '@/graphql/propertys/mutations'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/navigation'
import { Button } from 'antd'

interface Props {
  id: string
}

export const ButtonRemove = ({ id }: Props) => {
  const router = useRouter()
  const [deleteProperty] = useMutation(DELETE_PROPERTY)

  const remove = () => {
    void deleteProperty({ variables: { id } })
    router.push('/')
  }

  return (
    <Button danger onClick={remove}>Eliminar</Button>
  )
}
