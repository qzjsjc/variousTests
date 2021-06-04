module.exports = {
  id: (parent) => parent.id,
  name: (parent) => parent.name,
  email: (parent) => parent.email,
  links: (parent, args, context) => context.prisma.user.findUnique({where: {id: parent.id}}).links()
};