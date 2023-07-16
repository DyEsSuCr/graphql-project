import express from 'express'
import http from 'http'
import cors from 'cors'

import env from './config.js'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'

export async function startApolloServer (typeDefs, resolvers) {
  const app = express()
  const httpServer = http.createServer(app)
  const server = new ApolloServer({
    typeDefs,
    resolvers
  })

  await server.start()

  app.use('/graphql', cors(), express.json(), expressMiddleware(server))

  app.use((_, res) => res.status(404).json({ error: 'Rout Not Found' }))

  await new Promise((resolve) => httpServer.listen({ port: env.PORT }, resolve))
  console.log(`🚀 Server ready at http://localhost:${env.PORT}`)
}
