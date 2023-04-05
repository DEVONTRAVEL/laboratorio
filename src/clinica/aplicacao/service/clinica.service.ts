import {
  BadRequestException,
  Injectable,
  NotFoundException,
  HttpException,
} from '@nestjs/common';
import { ClienteService } from 'src/cliente/aplicacao/service/cliente.service';
import { AtualizarClinicaCommand } from 'src/clinica/dominio/command/atualizarClinica.command';
import { CriarClinicaCommand } from 'src/clinica/dominio/command/criarClinica.command';
import { ListarClinicaCommand } from 'src/clinica/dominio/command/listarClinica.command';
import { Clinica } from 'src/clinica/dominio/model/clinica.model';
import { ClinicaRepository } from 'src/clinica/infra/repository/mongoDb/clinica.repository';

@Injectable()
export class ClinicaService {
  constructor(
    private clinicaRepository: ClinicaRepository,
    private clienteService: ClienteService,
  ) {}

  async listar(listarClinicaCommand: ListarClinicaCommand): Promise<Clinica[]> {
    try {
      const resultado = await this.clinicaRepository.listar(
        listarClinicaCommand,
      );

      if (!resultado) {
        throw new NotFoundException('Nenhum clinica encontrado');
      }

      return resultado;
    } catch ({ message, status }) {
      throw new HttpException(message, status);
    }
  }

  async criar(criarClinicaCommand: CriarClinicaCommand): Promise<Clinica> {
    try {
      await this.clienteService.buscar(criarClinicaCommand.clienteId);

      const clinica = await this.clinicaRepository.criar(criarClinicaCommand);

      if (!clinica) {
        throw new BadRequestException('Ocorreu um erro ao cadastrar clinica');
      }

      return clinica;
    } catch ({ message, status }) {
      throw new HttpException(message, status);
    }
  }

  async buscar(id: string): Promise<Clinica> {
    try {
      const resultado = await this.clinicaRepository.buscar(id);

      if (!resultado) {
        throw new NotFoundException('Clinica não encontrado');
      }

      return resultado;
    } catch ({ message, status }) {
      throw new HttpException(message, status);
    }
  }

  async atualizar(
    atualizarClinicaCommand: AtualizarClinicaCommand,
  ): Promise<Clinica> {
    try {
      await this.buscar(atualizarClinicaCommand.id);

      const clinica = await this.clinicaRepository.atualizar(
        atualizarClinicaCommand,
      );

      if (!clinica) {
        throw new BadRequestException('Ocorreu um erro ao atualizar clinica');
      }

      return clinica;
    } catch ({ message, status }) {
      throw new HttpException(message, status);
    }
  }
}
