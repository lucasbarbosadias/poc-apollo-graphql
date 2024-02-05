import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { typeDefs } from './schemas'
import { resolvers } from './resolvers'
import { CourseAPI } from './datasources/rest/course-api'

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers })
  const { url } = await startStandaloneServer(server, {
    context: async () => {
      return {
        dataSources: {
          CourseAPI: new CourseAPI(),
        },
      }
    },
  })
  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `)
}

startApolloServer()
