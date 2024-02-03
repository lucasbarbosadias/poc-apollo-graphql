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

  """
  Query responsible for listing courses.
  """
  extend type Query {
    listCourses(params: ListCoursesParams): ListCoursesResponse
  }
`
