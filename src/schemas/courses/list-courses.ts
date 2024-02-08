import gql from 'graphql-tag'

export const listCoursesSchema = gql`
  input ListCoursesParams {
    limit: Int
    hours: Int
  }

  type ListCoursesResponse {
    data: [Course]
    hasMore: Boolean
  }

  extend type Query {
    """
    Query responsible for listing courses.
    """
    listCourses(params: ListCoursesParams): ListCoursesResponse
  }
`
