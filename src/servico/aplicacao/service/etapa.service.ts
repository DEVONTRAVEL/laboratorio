import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AtualizarEtapaCommand } from 'src/servico/dominio/command/atualizarEtapa.command';
import { CriarEtapaCommand } from 'src/servico/dominio/command/criarEtapa.command';
import { Etapa } from 'src/servico/dominio/model/etapa.model';
import { EtapaRepository } from 'src/servico/infra/repository/mongoDb/etapa.repository';

@Injectable()
export class EtapaService {
  constructor(private etapaRepository: EtapaRepository) {}

  async listar(): Promise<Etapa[]> {
    const resultado = await this.etapaRepository.listar();

    if (!resultado) {
      throw new NotFoundException('Nenhuma etapa encontrada');
    }

    return resultado;
  }

  async criar(criarEtapaCommand: CriarEtapaCommand): Promise<Etapa> {
    const resultado = await this.etapaRepository.criar(criarEtapaCommand);

    if (!resultado) {
      throw new BadRequestException('Ocorreu um erro ao criar uma nova etapa');
    }

    return resultado;
  }

  async buscar(id: string): Promise<Etapa> {
    const resultado = await this.etapaRepository.buscar(id);

    if (!resultado) {
      throw new NotFoundException('Etapa não encontrada');
    }

    return resultado;
  }

  async atualizar(atualizarEtapaCommand: AtualizarEtapaCommand) {
    const resultado = await this.etapaRepository.atualizar(
      atualizarEtapaCommand,
    );

    if (!resultado) {
      throw new BadRequestException('Ocorreu um erro ao atualizar etapa');
    }

    return resultado;
  }
}
