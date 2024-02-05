import { BaseException } from "./base-exception";

export class CourseNotFoundException extends BaseException {
  constructor() {
    super(
      'Course not found.',
      'COURSE_NOT_FOUND',
    )
  }
}
