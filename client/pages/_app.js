import '../styles/globals.css'
import DefaultLayout from '../layouts/DefaultLayout'
import { apolloClient } from '../utils/apollo-client'
import { ApolloProvider } from '@apollo/client'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ApolloProvider>
  )
}

export default MyApp
