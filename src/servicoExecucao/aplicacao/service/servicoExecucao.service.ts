import {
  BadRequestException,
  HttpException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ClinicaService } from 'src/clinica/aplicacao/service/clinica.service';
import { AtualizarServicoExecucaoCommand } from 'src/servicoExecucao/dominio/command/atualizarServicoExecucao.command';
import { CriarServicoExecucaoCommand } from 'src/servicoExecucao/dominio/command/criarServicoExecucao.command';
import { ListarServicoExecucaoCommand } from 'src/servicoExecucao/dominio/command/listarServicoExecucao.command';
import { ServicoExecucao } from 'src/servicoExecucao/dominio/model/servicoExecucao.model';
import { ServicoExecucaoRepository } from 'src/servicoExecucao/infra/repository/mongoDb/servicoExecucao.repository';
@Injectable()
export class ServicoExecucaoService {
  constructor(
    private dentistaRepository: ServicoExecucaoRepository,
    private clinicaService: ClinicaService,
  ) {}

  async listar(
    listarServicoExecucaoCommand: ListarServicoExecucaoCommand,
  ): Promise<ServicoExecucao[]> {
    try {
      const resultado = await this.dentistaRepository.listar(
        listarServicoExecucaoCommand,
      );

      if (!resultado) {
        throw new NotFoundException('Nenhum dentista encontrado');
      }

      return resultado;
    } catch ({ message, status }) {
      throw new HttpException(message, status);
    }
  }

  async criar(criarServicoExecucaoCommand: CriarServicoExecucaoCommand): Promise<ServicoExecucao> {
    try {
      await this.clinicaService.buscar(criarServicoExecucaoCommand.clinicaId);

      const dentista = await this.dentistaRepository.criar(
        criarServicoExecucaoCommand,
      );

      if (!dentista) {
        throw new BadRequestException('Ocorreu um erro ao cadastrar dentista');
      }

      return dentista;
    } catch ({ message, status }) {
      throw new HttpException(message, status);
    }
  }

  async buscar(id: string): Promise<ServicoExecucao> {
    try {
      const resultado = await this.dentistaRepository.buscar(id);

      if (!resultado) {
        throw new NotFoundException('ServicoExecucao não encontrado');
      }

      return resultado;
    } catch ({ message, status }) {
      throw new HttpException(message, status);
    }
  }

  async atualizar(
    atualizarServicoExecucaoCommand: AtualizarServicoExecucaoCommand,
  ): Promise<ServicoExecucao> {
    try {
      await this.buscar(atualizarServicoExecucaoCommand.id);

      const dentista = await this.dentistaRepository.atualizar(
        atualizarServicoExecucaoCommand,
      );

      if (!dentista) {
        throw new BadRequestException('Ocorreu um erro ao atualizar dentista');
      }

      return dentista;
    } catch ({ message, status }) {
      throw new HttpException(message, status);
    }
  }
}
