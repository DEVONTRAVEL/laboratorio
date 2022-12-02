import {
  Catch,
  HttpException,
  ExceptionFilter,
  ArgumentsHost,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: HttpException, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();
    const { url } = ctx.getRequest<Request>();

    const message = exception.getResponse()
      ? exception.getResponse()
      : 'Entre em contato com a equipe de T.I';
    const status = exception.getStatus();

    httpAdapter.reply(
      host.switchToHttp().getResponse(),
      {
        message,
        status,
        error: [],
        path: url,
      },
      exception.getStatus(),
    );
  }
}
