import gql from 'graphql-tag'

export const courseSchema = gql`
  type Course {
    id: String!
    name: String!
    description: String
    hours: Int!
    price: Float!
  }
`
