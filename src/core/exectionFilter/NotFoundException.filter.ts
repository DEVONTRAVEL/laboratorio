import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';

import { Request, Response } from 'express';

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: NotFoundException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const message = exception.getResponse();

    const status =
      exception instanceof NotFoundException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const messageBody =
      message instanceof Object
        ? { ...message }
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
