import express from "express"
import { ApolloServer } from "apollo-server-express"
import { txnTypeDefs, txnResolvers } from "./config"

const app = async () => {
    const server = new ApolloServer({typeDefs: txnTypeDefs, resolvers: txnResolvers})

    await server.start();
    const app = express()
    server.applyMiddleware({ app })

    console.log("works")

    app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    )
}

app()