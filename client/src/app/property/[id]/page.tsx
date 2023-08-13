import HeaderProperty from '@/components/HeaderProperty'
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
    <HeaderProperty property={property} />
  )
}
