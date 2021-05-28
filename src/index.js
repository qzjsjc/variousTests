const { ApolloServer } = require('apollo-server');
const { PrismaClient } = require('@prisma/client')
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

let links = [{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL'
}]

let users = [{
  id: 'user-0',
  name: 'user0'
}]

// 2
let linkIdCount = links.length;
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: (parent, args, context) => context.prisma.link.findMany(),
    link: (parent, args) => links.find(({id}) => id === args.id),
    users: () => users,
    user: (parent, args) => users.find(({id}) => id === args.id)
  },
  Mutation: {
    createUser: (parent, args, context, info) => {
      const user = {id: `user-${users.length}`, name: args.name};
      users.push(user);
      return user;
    },
    post: (parent, args, context) => {
      const newLink = context.prisma.link.create({
        data: {
          url: args.url,
          description: args.description
        }
      });
      return newLink;
    },
    updateLink: (parent, args) => {
      const link = links.find(({id}) => id === args.id);
      if (args.url) {link.url = args.url;}
      if (args.description) {link.description = args.description;}
      return link;
    },
    deleteLink: (parent, args) => {
      let curLink = null;
      let curInd = -1;
      links.forEach((link, index) => {
        if (link.id === args.id) {
          curLink = link;
          curInd = index;
        }
      });
      if (curInd > -1) {
        links.splice(curInd, 1);
      }
      return curLink;
    }
  },
  Link: {
    id: (parent) => parent.id,
    description: (parent) => parent.description,
    url: (parent) => parent.url
  },
  User: {
    id: (parent) => parent.id,
    name: (parent) => parent.name
  }
}

// 3
const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf8'
  ),
  resolvers,
  context: {
    prisma,
  }
})

server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );