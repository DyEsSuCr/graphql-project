import { GET_PREDIOS } from '../../graphql/predios'
import ModalForm from '../ModalForm'
import FormPredio from '../Forms/FormPredio'

import { useQuery } from '@apollo/client'
import { Table, Button } from 'antd'
import { useState } from 'react'
import Link from 'next/link'

const colums = [
  {
    title: 'Nombre',
    dataIndex: 'nombre',
    key: 'name'
  },
  {
    title: 'Avaluo',
    dataIndex: 'avaluo',
    key: 'avaluo'
  },
  {
    title: 'Departamento',
    dataIndex: 'departamento',
    key: 'departamento'
  },
  {
    title: 'Municipio',
    dataIndex: 'municipio',
    key: 'municipio'
  },
  {
    title: 'Acciones',
    key: 'acciones',
    render: ({ id }) => <Link href={`predios/${id}`} className='moreInfo'>Mas informacion</Link>
  }
]

export default function ListPredios() {
  const { loading, error, data } = useQuery(GET_PREDIOS)
  const [toggle, setToggle] = useState(false)

  if (loading) return <h3>Cargando...</h3>
  if (error) return <h3>Oops hubo un error 😒</h3>

  return (
    <div>
      <div className='prediosRegistrado'>
        <h1>Predios registrados</h1>
        <Button type='primary' onClick={() => setToggle(true)}>Crear predio</Button>
      </div>

      <Table
        columns={colums}
        dataSource={data.propertys}
        rowKey={(property) => property.id}
        loading={loading}
      />

      <ModalForm title='Crear predio' toggle={toggle} setToggle={setToggle} >
        <FormPredio setToggle={setToggle} />
      </ModalForm>
    </div>
  )
}