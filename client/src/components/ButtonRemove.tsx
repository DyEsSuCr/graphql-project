'use client'

import { DELETE_PROPERTY } from '@/graphql/propertys/mutations'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/navigation'
import { Button } from 'antd'
import { GET_PROPERTYS } from '@/graphql/propertys/querys'

interface Props {
  id: string
}

export const ButtonRemove = ({ id }: Props) => {
  const router = useRouter()
  const [deleteProperty] = useMutation(DELETE_PROPERTY, {
    refetchQueries: [
      {
        query: GET_PROPERTYS
      },
      'GET_PROPERTYS'
    ],
    awaitRefetchQueries: true
  })

  const remove = () => {
    void deleteProperty({ variables: { id } })
    router.push('/')
  }

  return (
    <Button danger onClick={remove}>Eliminar</Button>
  )
}

/* 'use client'

import { DELETE_PROPERTY } from '@/graphql/propertys/mutations'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/navigation'
import { Button } from 'antd'
import { DELETE_BUILD } from '@/graphql/builds/mutations'
import { DELETE_LAND } from '@/graphql/lands/mutations'

interface Props {
  id: string
  target: string
}

export const ButtonRemove = ({ id, target }: Props) => {
  const router = useRouter()
  const [deleteProperty] = useMutation(DELETE_PROPERTY)
  const [deleteBuild] = useMutation(DELETE_BUILD)
  const [deleteLand] = useMutation(DELETE_LAND)

  const remove = {
    land: void deleteProperty({ variables: { id } }),
    build: void deleteBuild({ variables: { id } }),
    property: void deleteLand({ variables: { id } })
  }

  const selectRemove = remove[target]

  return (
    <Button danger onClick={selectRemove}>Eliminar</Button>
  )
} */
