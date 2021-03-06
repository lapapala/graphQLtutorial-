const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('../src/generated/prisma-client')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Link = require('./resolvers/Link')


// 1
// const typeDefs = `
// type Query {
//   info: String!
//   feed: [Link!]!
// }

// type Mutation {
//     post(url: String!, description: String!): Link!
//   }
  

// type Link {
//     id: ID!
//     description: String!
//     url: String!
//   }
//  `
let links = [{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL'
}]
// 1
let idCount = links.length
const resolvers = {
  Query,
  Mutation,
  User,
  Link
}


// 3
const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => {
      return {
        ...request,
        prisma,
      }
    },
  })
server.start(() => console.log(`Server is running on http://localhost:4000`))