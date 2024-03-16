import { Course, CreateCourseInput } from '../../datasources/protocols/course'

export interface CreateCourseResolverInput {
  input: CreateCourseInput
  dataSources: any
}

export class CreateCourseResolver {
  public execute({ input, dataSources }: CreateCourseResolverInput): Course {
    console.log('CreateCourseResolver input: ', input)

    const course = dataSources.CourseAPI.createCourse(input)

    console.log('CreateCourseResolver response: ', { course })

    return course
  }
}
