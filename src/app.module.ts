import { Module } from '@nestjs/common';
import { AuthModule } from './core/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UsuarioModule } from './usuario/usuario.module';
import { ClienteModule } from './cliente/cliente.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UsuarioModule, ClienteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
