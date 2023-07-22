import '../styles/globals.css'
import PageLayount from '../layouts/PageLayount'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from '../utls/apollo-client'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <PageLayount title={'GeoSat'}>
        <Component {...pageProps} />
      </PageLayount>
    </ApolloProvider>
  )
}

export default MyApp
