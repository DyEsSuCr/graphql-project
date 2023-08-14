'use client'

import { GET_PROPERTYS } from '@/graphql/propertys/querys'
import { ModalForm } from '@/components/ModalForm'
import { Table } from '@/components/Table'
import { FormProperty } from '@/components/Form/FormProperty'
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr'

export default function Page () {
  const { data } = useSuspenseQuery(GET_PROPERTYS)

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
