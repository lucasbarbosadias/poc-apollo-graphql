import gql from 'graphql-tag'

export const createCourseSchema = gql`
  input CreateCourseInput {
    name: String!
    description: String
    hours: Int!
    price: Float!
  }

  extend type Mutation {
    """
    Query responsible for creating a new course.
    """
    createCourse(input: CreateCourseInput): Course
  }
`
