import { startApolloServer } from './app.js'
import { typeDefs, resolvers } from './resolvers/index.js'

await startApolloServer(typeDefs, resolvers)
