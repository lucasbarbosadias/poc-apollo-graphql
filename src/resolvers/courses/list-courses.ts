import { ListCoursesParams, ListCoursesResponse } from "../../datasources/protocols/course"

interface ListCoursesResolverParams {
  params: ListCoursesParams
  dataSources: any
}

export class ListCoursesResolver {
  public execute({ params, dataSources}: ListCoursesResolverParams): ListCoursesResponse {
    console.log('ListCoursesResolver params: ', params)

    const courses = dataSources.CourseAPI.listCourses(params)

    console.log('ListCoursesResolver courses returned: ', courses.data.length)

    if (!courses.data) {
      return {
        data: [],
        hasMore: false,
      }
    }

    return courses
  }
}
