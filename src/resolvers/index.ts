import { GetCourseResolver, ListCoursesResolver } from './courses'

export const resolvers = {
  Query: {
    getCourse: (_, { courseId }, { dataSources }) => {
      const getCourseResolver = new GetCourseResolver()

      return getCourseResolver.execute({ courseId, dataSources })
    },
    listCourses: (_, { params }, { dataSources }) => {
      const listCoursesResolver = new ListCoursesResolver()

      return listCoursesResolver.execute({ params, dataSources })
    },
  },
  Mutation: {},
}
