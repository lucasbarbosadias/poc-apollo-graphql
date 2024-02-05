import gql from 'graphql-tag'

export const listCoursesSchema = gql`
  input ListCoursesParams {
    limit: Int
    name: String
    duration: String
    price: String
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
