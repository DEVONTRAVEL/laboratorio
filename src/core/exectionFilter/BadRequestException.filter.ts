import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(BadRequestException)
export class BadRequestExceptionFilter implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const message = exception.getResponse();

    const status =
      exception instanceof BadRequestException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const messageBody =
      message instanceof Object
        ? {
            ...message,
          }
        : {
            message,
          };

    const error = {
      status,
      message: messageBody.message,
      error: [],
      path: request.url,
      timestamp: new Date().toISOString(),
    };

    response.status(status).json(error);
  }
}
