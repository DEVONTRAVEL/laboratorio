import { Module } from '@nestjs/common';
import { AuthModule } from './core/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UsuarioModule } from './usuario/usuario.module';
import { ClienteModule } from './cliente/cliente.module';
import { DentistaModule } from './dentista/dentista.module';
import { ServicoModule } from './servico/servico.module';
import { APP_FILTER } from '@nestjs/core';
import { UnauthorizedExceptionFilter } from './core/exectionFilter/UnauthorizedException.filter';
import { BadRequestExceptionFilter } from './core/exectionFilter/BadRequestException.filter';
import { NotFoundExceptionFilter } from './core/exectionFilter/NotFoundException.filter';
import { MethodNotAllowedExceptionFilter } from './core/exectionFilter/NotImplementedException.filter';
import { HttpExceptionFilter } from './core/exectionFilter/HttpException.filter';
import { ClinicaModule } from './clinica/clinica.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    UsuarioModule,
    ClinicaModule,
    ClienteModule,
    DentistaModule,
    ServicoModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: UnauthorizedExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: BadRequestExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: NotFoundExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: MethodNotAllowedExceptionFilter,
    },
  ],
})
export class AppModule {}
