import { Module } from '@nestjs/common';
import { ClienteModule } from 'src/cliente/cliente.module';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { DentistaController } from './aplicacao/controller/dentista.controller';
import { DentistaService } from './aplicacao/service/dentista.service';
import { IsRealClientValidator } from './dominio/decorator/isRealClient.decorator';
import { DentistaRepository } from './infra/repository/mongoDb/dentista.repository';

@Module({
  imports: [ClienteModule],
  controllers: [DentistaController],
  providers: [
    DentistaService,
    PrismaService,
    DentistaRepository,
    IsRealClientValidator,
  ],
})
export class DentistaModule {}
