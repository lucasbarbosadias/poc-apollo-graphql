import gql from 'graphql-tag'

export const getCourseSchema = gql`
  extend type Query {
    """
    Query responsible for getting a course.
    """
    getCourse(courseId: String!): Course
  }
`
