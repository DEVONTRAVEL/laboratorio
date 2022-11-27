import { Module } from '@nestjs/common';
import { ClienteModule } from 'src/cliente/cliente.module';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { EtapaController } from './aplicacao/controller/etapa.controller';
import { ServicoController } from './aplicacao/controller/servico.controller';
import { EtapaService } from './aplicacao/service/etapa.service';
import { ServicoService } from './aplicacao/service/servico.service';
import { EtapaRepository } from './infra/repository/mongoDb/etapa.repository';
import { ServicoRepository } from './infra/repository/mongoDb/servico.repository';

@Module({
  imports: [ClienteModule],
  controllers: [ServicoController, EtapaController],
  providers: [
    PrismaService,
    ServicoService,
    ServicoRepository,
    EtapaService,
    EtapaRepository,
  ],
})
export class ServicoModule {}
