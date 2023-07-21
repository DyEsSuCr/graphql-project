import { useRouter } from 'next/router'

export default function Property() {
  const {query} = useRouter()

  return (
    <h1>propiedad {query.id}</h1>
  )
}