import {
  BadRequestException,
  HttpException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ClienteService } from 'src/cliente/aplicacao/service/cliente.service';
import { AtualizarServicoCommand } from 'src/servico/dominio/command/atualizarServico.command';
import { CriarClienteServicoCommand } from 'src/servico/dominio/command/criarClienteServico.command';
import { CriarServicoCommand } from 'src/servico/dominio/command/criarServico.command';
import { ListarServicoCommand } from 'src/servico/dominio/command/listarServico.command';
import { Servico } from 'src/servico/dominio/model/servico.model';
import { ServicoRepository } from 'src/servico/infra/repository/mongoDb/servico.repository';

@Injectable()
export class ServicoService {
  constructor(
    private servicoRepository: ServicoRepository,
    private clienteService: ClienteService,
  ) {}

  async listar(listarServicoCommand: ListarServicoCommand): Promise<Servico[]> {
    try {
      const resultado = await this.servicoRepository.listar(
        listarServicoCommand,
      );

      if (!resultado) {
        throw new NotFoundException('Nenhum Serviço encontrado');
      }

      return resultado;
    } catch ({ message, status }) {
      throw new HttpException(message, status);
    }
  }

  async criar(criarServicoCommand: CriarServicoCommand): Promise<Servico> {
    try {
      const servico = await this.servicoRepository.criar(criarServicoCommand);

      if (!servico) {
        throw new BadRequestException('Ocorreu um erro ao cadastrar serviço');
      }
      return servico;
    } catch ({ message, status }) {
      throw new HttpException(message, status);
    }
  }

  async buscar(id: string) {
    try {
      const resultado = await this.servicoRepository.buscar(id);

      if (!resultado) {
        throw new NotFoundException('Serviço não encontrado');
      }
      return resultado;
    } catch ({ message, status }) {
      throw new HttpException(message, status);
    }
  }

  async atualizar(atualizarServicoCommand: AtualizarServicoCommand) {
    try {
      await this.buscar(atualizarServicoCommand.id);

      const servico = await this.servicoRepository.atualizar(
        atualizarServicoCommand,
      );

      if (!servico) {
        throw new BadRequestException('Ocorreu um erro ao atualizar serviço');
      }

      return servico;
    } catch ({ message, status }) {
      throw new HttpException(message, status);
    }
  }

  async criarClienteServico(
    criarClienteServicoCommand: CriarClienteServicoCommand,
  ) {
    try {
      await this.buscar(criarClienteServicoCommand.servicoId);
      await this.clienteService.buscar(criarClienteServicoCommand.clienteId);

      const resultado = await this.servicoRepository.criarClienteServico(
        criarClienteServicoCommand,
      );

      if (!resultado) {
        throw new BadRequestException(
          'Ocorreu um erro ao cadastrar Serviço cliente',
        );
      }

      return resultado;
    } catch ({ message, status }) {
      throw new HttpException(message, status);
    }
  }
}
