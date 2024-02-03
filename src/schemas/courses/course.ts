import gql from 'graphql-tag'

export const courseSchema = gql`
  type Course {
    id: String!
    name: String!
    description: String
    duration: Int!
    price: Float!
  }
`
