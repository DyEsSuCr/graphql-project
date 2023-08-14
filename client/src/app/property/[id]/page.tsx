import { Builds } from '@/components/Builds'
import HeaderProperty from '@/components/HeaderProperty'
import { Lands } from '@/components/Lands'
import { GET_PROPERTY } from '@/graphql/propertys/querys'
import { getClient } from '@/libs/apolloClient'

interface Props {
  params: {
    id: string
  }
}

export default async function PropertyComponet ({ params }: Props) {
  const { data: { property } } = await getClient().query({
    query: GET_PROPERTY,
    variables: {
      id: params.id
    },
    context: {
      fetchOptions: {
        next: { revalidate: 5 }
      }
    }
  })

  return (
    <div className='flex flex-col gap-10'>
      <HeaderProperty property={property} />
      <Lands land={property.terreno} />
      <Builds builds={property.construccion} />
    </div>
  )
}
