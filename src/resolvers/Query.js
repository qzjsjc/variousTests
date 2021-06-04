module.exports = {
  info: () => `This is the API of a Hackernews Clone`,
  feed: (parent, args, context) => context.prisma.link.findMany(),
  link: (parent, args) => links.find(({id}) => id === args.id),
  users: () => [],
  user: (parent, args) => null
}