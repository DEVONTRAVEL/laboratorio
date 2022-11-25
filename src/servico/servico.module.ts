import { Module } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { ServicoController } from './aplicacao/controller/servico.controller';
import { ServicoService } from './aplicacao/service/servico.service';
import { ServicoRepository } from './infra/repository/mongoDb/servico.repository';

@Module({
  imports: [],
  controllers: [ServicoController],
  providers: [PrismaService, ServicoService, ServicoRepository],
})
export class ServicoModule {}
