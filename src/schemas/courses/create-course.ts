import gql from 'graphql-tag'

export const createCourseSchema = gql`
  input CreateCourseInput {
    name: String!
    description: String
    duration: Int!
    price: Float!
  }

  """
  Query responsible for creating a new course.
  """
  extend type Mutation {
    createCourse(input: CreateCourseInput): Coursee
  }
`
