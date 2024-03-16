export interface Course {
  id: string
  name: string
  description?: string
  hours: number
  price: number
}

export interface ListCoursesParams {
  limit?: number
  hours?: number
}

export interface ListCoursesResponse {
  data: Course[]
  hasMore: boolean
}

export interface CreateCourseInput {
  name: string
  description?: string
  hours: number
  price: number
}