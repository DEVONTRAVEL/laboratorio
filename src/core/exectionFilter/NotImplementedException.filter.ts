import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
  MethodNotAllowedException,
} from '@nestjs/common';

import { Request, Response } from 'express';

@Catch(MethodNotAllowedException)
export class MethodNotAllowedExceptionFilter implements ExceptionFilter {
  catch(exception: MethodNotAllowedException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const message = exception.getResponse();

    const status =
      exception instanceof MethodNotAllowedException
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
      message: 'Método não permitido',
      error: [],
      path: request.url,
      timestamp: new Date().toISOString(),
    };

    response.status(status).json(error);
  }
}
