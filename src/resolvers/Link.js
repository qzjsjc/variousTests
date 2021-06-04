module.exports = {
  id: (parent) => parent.id,
  description: (parent) => parent.description,
  url: (parent) => parent.url,
  postedBy: (parent, args, context) => context.prisma.link(findUnique({where: {id: parent.id}})).postedBy()
}