const courses = [
  {
    _id: 'abc123',
    title: 'Graphql',
    teacher: 'Anonymous',
    description: 'Introduction',
    topic: 'Programming',
  },
  {
    _id: 'abc456',
    title: 'React native',
    teacher: 'Agustin Navarro',
    description: 'Flatlist and Api',
    topic: 'Programming',
  },
  {
    _id: 'abc789',
    title: 'Java SE',
    teacher: 'Anahi Salgado',
    description: 'Fundamentals',
    topic: 'Programming',
  },
]
module.exports = {
  Query: {
    courses: () => courses,
    course: (root, args) => {
      return courses.find((value) => value._id === args.id)
    },
  },
}
