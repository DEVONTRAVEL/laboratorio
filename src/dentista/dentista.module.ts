import { Module } from '@nestjs/common';
import { ClienteModule } from 'src/cliente/cliente.module';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { DentistaController } from './aplicacao/controller/dentista.controller';
import { DentistaService } from './aplicacao/service/dentista.service';
import { DentistaRepository } from './infra/repository/mongoDb/dentista.repository';

@Module({
  imports: [ClienteModule],
  controllers: [DentistaController],
  providers: [DentistaService, PrismaService, DentistaRepository],
})
export class DentistaModule {}
