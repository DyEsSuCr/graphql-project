import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { GET_PROPERTYS } from '../graphql/propertys'
import { Table } from 'antd'

const colums = [
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Precio comercial',
    dataIndex: 'appraisal',
    key: 'appraisal',
  },
  {
    title: 'Departamento',
    dataIndex: 'departament',
    key: 'departament',
  },
  {
    title: 'Municipio',
    dataIndex: 'town',  
    key: 'town',
  },
  {
    title: 'Acciones',
    key: 'acciones',
    render: ({id}) => <Link href={`propertys/${id}`}>Mas informacion</Link>
  }
]

export default function PredioList() {

  const {loading, error, data} = useQuery(GET_PROPERTYS)

  if (loading) return <span>loading...</span>
  if (error) return <p>Opps</p>
  if (data?.propertys.length <= 0) return <h1>no hay predios registados</h1>

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
        <h1>Predios registrados</h1>
        <Link href={`/propertys/form`} style={{backgroundColor: '#0be122', color: '#000', padding: '.5rem'}}>Crear predio</Link>
      </div>
        <Table
          columns={colums}
          dataSource={data.propertys}
          rowKey={(data) => data.id}
          loading={loading}
        />     
    </div>
  )
}