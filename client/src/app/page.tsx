import { getClient } from '@/libs/apolloClient'
import { GET_PROPERTYS } from '@/graphql/propertys/querys'
import { ModalForm } from '@/components/ModalForm'
import { Table } from '@/components/Table'
import { FormProperty } from '@/components/Form/FormProperty'

export default async function Page () {
  const { data } = await getClient().query({
    query: GET_PROPERTYS,
    context: {
      fetchOptions: {
        next: { revalidate: 5 }
      }
    }
  })

  return (
    <>
      <header className='flex justify-around my-4'>
        <h3>Predios registrados</h3>
        <ModalForm title='Registrar Predio'>
          <FormProperty />
        </ModalForm>
      </header>
      <Table propertys={data.propertys} />
    </>
  )
}
