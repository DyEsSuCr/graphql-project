import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { GET_PROPERTY } from '../../graphql/propertys'

export default function Property() {
  const {query} = useRouter()
  console.log(query.id)
  const {data} = useQuery(GET_PROPERTY, {
    variables: {
      id: query.id
    }
  })

  return (
    <div>
      <p>{data?.property.name}</p>
      <p>{data?.property.appraisal}</p>
      <p>{data?.property.departament}</p>
      <p>{data?.property.town}</p>
    </div>
  )
}