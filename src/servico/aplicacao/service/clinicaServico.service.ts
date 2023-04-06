import {
  BadRequestException,
  HttpException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AtualizarClinicaServicoCommand } from 'src/servico/dominio/command/atualizarClinicaServico.command';
import { CriarClinicaServicoCommand } from 'src/servico/dominio/command/criarClinicaServico.command';
import { ListarClinicaServicoCommand } from 'src/servico/dominio/command/listarClinicaServico.command';
import { ClinicaServico } from 'src/servico/dominio/model/clinicaServico.model';
import { ClinicaServicoRepository } from 'src/servico/infra/repository/mongoDb/clinicaServico.repository';
import { ServicoService } from './servico.service';
import { ClinicaService } from 'src/clinica/aplicacao/service/clinica.service';

@Injectable()
export class ClinicaServicoService {
  constructor(
    private clinicaServicoRepository: ClinicaServicoRepository,
    private clinicaService: ClinicaService,
    private servicoService: ServicoService,
  ) {}

  async listar(
    listarClinicaServicoCommand: ListarClinicaServicoCommand,
  ): Promise<ClinicaServico[]> {
    try {
      const resultado = await this.clinicaServicoRepository.listar(
        listarClinicaServicoCommand,
      );

      if (!resultado) {
        throw new NotFoundException('Nenhum Serviço Clinica encontrado');
      }

      return resultado;
    } catch ({ message, status }) {
      throw new HttpException(message, status);
    }
  }

  async criar(
    criarClinicaServicoCommand: CriarClinicaServicoCommand,
  ): Promise<ClinicaServico> {
    try {
      await this.servicoService.buscar(criarClinicaServicoCommand.servicoId);
      await this.clinicaService.buscar(criarClinicaServicoCommand.clinicaId);

      const resultado = await this.clinicaServicoRepository.criar(
        criarClinicaServicoCommand,
      );

      if (!resultado) {
        throw new BadRequestException(
          'Ocorreu um erro ao cadastrar Serviço Clinica',
        );
      }

      return resultado;
    } catch ({ message, status }) {
      throw new HttpException(message, status);
    }
  }

  async buscar(id: string) {
    try {
      const resultado = await this.clinicaServicoRepository.buscar(id);

      if (!resultado) {
        throw new NotFoundException('Serviço Clinica não encontrado');
      }
      return resultado;
    } catch ({ message, status }) {
      throw new HttpException(message, status);
    }
  }

  async atualizar(
    atualizarClinicaServicoCommand: AtualizarClinicaServicoCommand,
  ) {
    try {
      await this.buscar(atualizarClinicaServicoCommand.id);

      const servicoClinica = await this.clinicaServicoRepository.atualizar(
        atualizarClinicaServicoCommand,
      );

      if (!servicoClinica) {
        throw new BadRequestException('Ocorreu um erro ao atualizar serviço clinica');
      }

      return servicoClinica;
    } catch ({ message, status }) {
      throw new HttpException(message, status);
    }
  }
}
