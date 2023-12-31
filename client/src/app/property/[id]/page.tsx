'use client'

import { Builds } from '@/components/Builds'
import HeaderProperty from '@/components/HeaderProperty'
import { Lands } from '@/components/Lands'
import { GET_PROPERTY } from '@/graphql/propertys/querys'
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr'

interface Props {
  params: {
    id: string
  }
}

export default function PropertyComponet ({ params }: Props) {
  const { data: { property } } = useSuspenseQuery(GET_PROPERTY, {
    variables: {
      id: params.id
    }
  })

  return (
    <div className='flex flex-col gap-10'>
      <HeaderProperty property={property} />
      <Lands land={property.terreno} predioId={params.id} />
      <Builds builds={property.construccion} predioId={params.id} />
    </div>
  )
}
