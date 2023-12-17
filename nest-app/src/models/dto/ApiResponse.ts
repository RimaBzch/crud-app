export class ApiResponse<T> {
  code: number;
  message: string;
  data: T;
  constructor(data: T, code: number, message: string) {
    this.code = code;
    this.message = message;
    this.data = data;
  }
}
