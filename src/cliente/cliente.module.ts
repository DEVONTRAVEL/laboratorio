import { Module } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { ClienteController } from './aplicacao/controller/cliente.controller';
import { ClienteService } from './aplicacao/service/cliente.service';
import { IsCpfUniqueValidator } from './dominio/decorator/IsCpfUnique.decorator';
import { ClienteRepository } from './infra/repository/mongoDb/cliente.repository';

@Module({
  imports: [],
  controllers: [ClienteController],
  providers: [
    ClienteService,
    PrismaService,
    ClienteRepository,
    IsCpfUniqueValidator,
  ],
})
export class ClienteModule {}
