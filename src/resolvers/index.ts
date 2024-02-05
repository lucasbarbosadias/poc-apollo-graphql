import { GetCourseResolver } from './courses'

export const resolvers = {
  Query: {
    // get a single course by ID
    getCourse: (_, { courseId }, { dataSources }) => {
      const getCourseResolver = new GetCourseResolver()

      return getCourseResolver.execute({ courseId, dataSources })
    },
  },
  Mutation: {},
}
