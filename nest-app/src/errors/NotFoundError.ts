/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundError extends HttpException {
  constructor(message?: string) {
    super(
      {
        statusCode: HttpStatus.NOT_FOUND,
        error: 'Not found',
        message,
      },
      HttpStatus.NOT_FOUND,
    );
  }
}
