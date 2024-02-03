import {
  courseSchema,
  createCourseSchema,
  getCourseSchema,
  listCoursesSchema,
} from './courses'

export const typeDefs = [
  courseSchema,
  getCourseSchema,
  createCourseSchema,
  listCoursesSchema,
]
