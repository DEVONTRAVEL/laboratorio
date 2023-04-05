import { Module } from '@nestjs/common';
import { ClienteModule } from 'src/cliente/cliente.module';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { ClinicaController } from './aplicacao/controller/clinica.controller';
import { ClinicaService } from './aplicacao/service/clinica.service';
import { ClinicaRepository } from './infra/repository/mongoDb/clinica.repository';

@Module({
  imports: [ClienteModule],
  controllers: [ClinicaController],
  providers: [ClinicaService, PrismaService, ClinicaRepository],
  exports: [ClinicaService, ClinicaRepository],
})
export class ClinicaModule {}
