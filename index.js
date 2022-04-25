const { makeExecutableSchema } = require('graphql-tools')
const { graphqlHTTP } = require('express-graphql')
const express = require('express')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')

const app = express()
const port = process.env.PORT || 3000

const typeDefs = readFileSync(join(__dirname, 'lib', 'schema.graphql'), 'utf-8')
const schema = makeExecutableSchema({ typeDefs, resolvers })

app.use(
  '/api',
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
)

app.listen(port, () => {
  console.log('Server is listening ' + port)
})

/* graphql({ schema, source: '{ great }', rootValue: resolvers }).then(
  (response) => {
    console.log(response)
  }
) */
