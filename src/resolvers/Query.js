module.exports = {
  info: () => `This is the API of a Hackernews Clone`,
  feed: (parent, args, context) => {
    const where = args.filter
    ? {
      OR: [
        { description: { contains: args.filter } },
        { url: { contains: args.filter } },
      ],
    }
    : {}
    const links = context.prisma.link.findMany({
      where,
      skip: args.skip,
      take: args.take,
      orderBy: args.orderBy,
    });
    const count = context.prisma.link.count({ where })

    return {
      links,
      count,
    }
  },
  link: (parent, args) => links.find(({id}) => id === args.id),
  users: () => [],
  user: (parent, args) => null
}