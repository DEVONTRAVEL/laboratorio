import { Module } from '@nestjs/common';
import { ClinicaModule } from 'src/clinica/clinica.module';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { ServicoExecucaoController } from './aplicacao/controller/servicoExecucao.controller';
import { ServicoExecucaoRepository } from './infra/repository/mongoDb/servicoExecucao.repository';
import { ServicoExecucaoService } from './aplicacao/service/servicoExecucao.service';

@Module({
  imports: [ClinicaModule],
  controllers: [ServicoExecucaoController],

  providers: [ServicoExecucaoService, PrismaService, ServicoExecucaoRepository],
})
export class ServicoExecucaoModule {}
