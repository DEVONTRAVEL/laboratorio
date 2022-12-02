import { Module } from '@nestjs/common';
import { AuthModule } from './core/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UsuarioModule } from './usuario/usuario.module';
import { ClienteModule } from './cliente/cliente.module';
import { DentistaModule } from './dentista/dentista.module';
import { ServicoModule } from './servico/servico.module';
import { HttpExceptionFilter } from './core/filter/httpException.filter';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    UsuarioModule,
    ClienteModule,
    DentistaModule,
    ServicoModule,
  ],
  controllers: [],
  providers: [
    {
      useClass: HttpExceptionFilter,
      provide: APP_FILTER,
    },
  ],
})
export class AppModule {}
