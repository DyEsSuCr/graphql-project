import { NextSSRInMemoryCache, NextSSRApolloClient } from '@apollo/experimental-nextjs-app-support/ssr'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'
import { HttpLink } from '@apollo/client'

const PORT = process.env.PORT ?? ''

export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: new HttpLink({
      uri: `http://localhost:${PORT}/graphql`
    })
  })
})
