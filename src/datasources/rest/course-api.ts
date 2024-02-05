import { coursesMock } from "./courses-mock";

export class CourseAPI {
  getCourse(courseId: string) {
    console.log('Rest CourseAPI courseId: ', courseId)
    return coursesMock.find(course => course.id === courseId)
  }
}
