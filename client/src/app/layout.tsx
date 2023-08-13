import { ApolloWrapper } from '@/libs/apolloWrapper'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GraphQL 13'
}

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <body>
        <ApolloWrapper>
          <main className='max-w-7xl mx-auto'>
            {children}
          </main>
        </ApolloWrapper>
      </body>
    </html>
  )
}
