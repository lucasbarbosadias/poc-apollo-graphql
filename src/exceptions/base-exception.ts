export class BaseException extends Error {
  public code: string

  constructor(message: string, code: string) {
    super(message)

    this.code = code
  }
}
