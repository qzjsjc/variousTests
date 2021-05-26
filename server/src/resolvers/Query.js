async function feed(parent, args, context, info) {
  const where = args.filter
    ? {
        OR: [
          { description: { contains: args.filter } },
          { url: { contains: args.filter } }
        ]
      }
    : {};

  const links = await context.prisma.link.findMany({
    where,
    skip: args.skip,
    take: args.take,
    orderBy: args.orderBy
  });

  const count = await context.prisma.link.count({ where });

  const unique = `${args.skip}-${args.take}${args.filter ? `-${args.filter}` : ''}`;

  console.log(unique);

  return {
    id: `main-feed_${unique}`,
    links,
    count
  };
}

module.exports = {
  feed
};
