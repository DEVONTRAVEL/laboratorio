import { Module } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { UsuarioController } from './aplicacao/controller/usuario.controller';
import { UsuarioService } from './aplicacao/service/usuario.service';
import { UsuarioRepository } from './infra/repository/mongoDb/usuario.repository';

@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [PrismaService, UsuarioService, UsuarioRepository],
})
export class UsuarioModule {}
