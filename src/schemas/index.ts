import gql from 'graphql-tag'
import {
  courseSchema,
  createCourseSchema,
  getCourseSchema,
  listCoursesSchema,
} from './courses'

const rootSchema = gql`
  type Query
  type Mutation
`

export const typeDefs = [
  rootSchema,
  courseSchema,
  getCourseSchema,
  createCourseSchema,
  listCoursesSchema,
]
