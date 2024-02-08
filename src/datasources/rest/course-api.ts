import { Course, ListCoursesParams } from "../protocols/course";
import { coursesMock } from "./courses-mock";

export class CourseAPI {
  getCourse(courseId: string) {
    console.log('Rest getCourse courseId: ', courseId)
    return coursesMock.find(course => course.id === courseId)
  }

  filterCourses(courses: Course[], limit: number) {
    const limitedCourses = courses.slice(0, Math.max(0, limit));
    
    return {
      data: limitedCourses,
      hasMore: courses.length < coursesMock.length
    }
  }

  listCourses(params: ListCoursesParams) {
    console.log('Rest listCourses courseId: ', params)
    const { hours, limit } = params

    let response = {
      data: coursesMock,
      hasMore: false,
    }

    if(hours) {
      const coursesFiltered = coursesMock.filter(course => course.hours === hours)
      const hasMore = coursesFiltered.length < coursesMock.length

      if(limit) {
        return this.filterCourses(coursesFiltered, limit)
      }

      response = {
        data: coursesFiltered,
        hasMore
      }
    }

    if (limit) {
      return this.filterCourses(coursesMock, limit)
    }

    return response
  }
}
