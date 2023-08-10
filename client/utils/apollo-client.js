import { ApolloClient, InMemoryCache } from '@apollo/client'

const PORT = process.env.NEXT_PUBLIC_PORT_GRAPHQL

export const apolloClient = new ApolloClient({
  uri: `http://localhost:${PORT}/graphql`,
  cache: new InMemoryCache()
})
