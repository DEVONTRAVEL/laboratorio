import {
  BadRequestException,
  HttpException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AtualizarEtapaCommand } from 'src/servico/dominio/command/atualizarEtapa.command';
import { CriarEtapaCommand } from 'src/servico/dominio/command/criarEtapa.command';
import { Etapa } from 'src/servico/dominio/model/etapa.model';
import { EtapaRepository } from 'src/servico/infra/repository/mongoDb/etapa.repository';
import { ClinicaServicoService } from './clinicaServico.service';

@Injectable()
export class EtapaService {
  constructor(
    private etapaRepository: EtapaRepository,
    private clinicaServicoService: ClinicaServicoService,
  ) {}

  async listar(): Promise<Etapa[]> {
    try {
      const resultado = await this.etapaRepository.listar();

      if (!resultado) {
        throw new NotFoundException('Nenhuma etapa encontrada');
      }

      return resultado;
    } catch ({ message, status }) {
      throw new HttpException(message, status);
    }
  }

  async criar(criarEtapaCommand: CriarEtapaCommand): Promise<Etapa> {
    try {
      await this.clinicaServicoService.buscar(
        criarEtapaCommand.clinicaServicoId,
      );

      const resultado = await this.etapaRepository.criar(criarEtapaCommand);

      if (!resultado) {
        throw new BadRequestException(
          'Ocorreu um erro ao criar uma nova etapa',
        );
      }

      return resultado;
    } catch ({ message, status }) {
      throw new HttpException(message, status);
    }
  }

  async buscar(id: string): Promise<Etapa> {
    try {
      const resultado = await this.etapaRepository.buscar(id);

      if (!resultado) {
        throw new NotFoundException('Etapa não encontrada');
      }

      return resultado;
    } catch ({ message, status }) {
      throw new HttpException(message, status);
    }
  }

  async atualizar(atualizarEtapaCommand: AtualizarEtapaCommand) {
    try {
      await this.buscar(atualizarEtapaCommand.id);

      const resultado = await this.etapaRepository.atualizar(
        atualizarEtapaCommand,
      );

      if (!resultado) {
        throw new BadRequestException('Ocorreu um erro ao atualizar etapa');
      }

      return resultado;
    } catch ({ message, status }) {
      throw new HttpException(message, status);
    }
  }
}
