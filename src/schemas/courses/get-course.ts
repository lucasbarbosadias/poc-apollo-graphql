import gql from 'graphql-tag'

export const getCourseSchema = gql`
  """
  Query responsible for getting a course.
  """
  extend type Query {
    getCourse(courseId: String!): Course
  }
`
