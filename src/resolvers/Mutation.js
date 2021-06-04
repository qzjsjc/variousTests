const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET } = require('../utils')

async function signup(parent, args, context, info) {
  // 1
  const password = await bcrypt.hash(args.password, 10)

  // 2
  const user = await context.prisma.user.create({ data: { ...args, password } })

  // 3
  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  // 4
  return {
    token,
    user,
  }
}

async function login(parent, args, context, info) {
  // 1
  const user = await context.prisma.user.findUnique({ where: { email: args.email } })
  if (!user) {
    throw new Error('No such user found')
  }

  // 2
  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  // 3
  return {
    token,
    user,
  }
}

module.exports = {
  createUser: (parent, args, context, info) => {
    const user = {id: `user-${users.length}`, name: args.name};
    return user;
  },
  post: async (parent, args, context) => {
    const { userId } = context;
    const newLink = await context.prisma.link.create({
      data: {
        url: args.url,
        description: args.description,
        postedBy: {connect: {id: userId}}
      }
    });
    return newLink;
  },
  updateLink: (parent, args, context) => {
    const data = {};
    if (args.url) {data.url = args.url;}
    if (args.description) {data.description = args.description;}
    return context.prisma.link.update({where: {
      id: args.id
    }, data});
  },
  deleteLink: (parent, args) => {
    return context.prisma.link.delete({where: {id: args.id}});
  },
  signup,
  login
}