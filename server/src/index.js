import { startApolloServer } from './app.js'
import { typeDefs, resolvers } from './graphql/schema.js'
import { dbConnect } from './database/connect.js'

import './models/index.js'

startApolloServer(typeDefs, resolvers)
dbConnect()
