import { Course } from '../../datasources/protocols/course'
import { CourseNotFoundException } from '../../exceptions/course-not-found-exception'

interface GetCourseParams {
  courseId: string,
  dataSources: any
}

export class GetCourseResolver {
  public execute({ courseId, dataSources }: GetCourseParams): Course {
    console.log('GetCourseResolver courseId: ', courseId)

    const course = dataSources.CourseAPI.getCourse(courseId)

    if (!course) {
      console.error('Course not found')
      throw new CourseNotFoundException()
    }

    console.log('GetCourseResolver response: ', { courseId, name: course.name })

    return course
  }
}
