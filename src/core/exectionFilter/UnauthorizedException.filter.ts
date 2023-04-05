import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';

import { Request, Response } from 'express';

@Catch(UnauthorizedException)
export class UnauthorizedExceptionFilter implements ExceptionFilter {
  catch(exception: UnauthorizedException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const message = exception.getResponse();

    const status =
      exception instanceof UnauthorizedException
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
      message: 'Não autorizado',
      error: [],
      path: request.url,
      timestamp: new Date().toISOString(),
    };

    response.status(status).json(error);
  }
}
