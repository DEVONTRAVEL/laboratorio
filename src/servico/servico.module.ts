import { Module } from '@nestjs/common';
import { ClinicaModule } from 'src/clinica/clinica.module';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { EtapaController } from './aplicacao/controller/etapa.controller';
import { ServicoController } from './aplicacao/controller/servico.controller';
import { EtapaService } from './aplicacao/service/etapa.service';
import { ServicoService } from './aplicacao/service/servico.service';
import { EtapaRepository } from './infra/repository/mongoDb/etapa.repository';
import { ServicoRepository } from './infra/repository/mongoDb/servico.repository';
import { ClinicaServicoController } from './aplicacao/controller/clinicaServico.controller';
import { ClinicaServicoRepository } from './infra/repository/mongoDb/clinicaServico.repository';
import { ClinicaServicoService } from './aplicacao/service/clinicaServico.service';

@Module({
  imports: [ClinicaModule],
  controllers: [ClinicaServicoController, ServicoController, EtapaController],
  providers: [
    PrismaService,
    ClinicaServicoService,
    ClinicaServicoRepository,
    ServicoService,
    ServicoRepository,
    EtapaService,
    EtapaRepository,
  ],
})
export class ServicoModule {}
