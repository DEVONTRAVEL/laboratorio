import {
  BadRequestException,
  HttpException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AtualizarServicoCommand } from 'src/servico/dominio/command/atualizarServico.command';
import { CriarServicoCommand } from 'src/servico/dominio/command/criarServico.command';
import { ListarServicoCommand } from 'src/servico/dominio/command/listarServico.command';
import { Servico } from 'src/servico/dominio/model/servico.model';
import { ServicoRepository } from 'src/servico/infra/repository/mongoDb/servico.repository';

@Injectable()
export class ServicoService {
  constructor(private servicoRepository: ServicoRepository) {}

  async listar(listarServicoCommand: ListarServicoCommand): Promise<Servico[]> {
    const resultado = await this.servicoRepository.listar(listarServicoCommand);

    if (!resultado) {
      throw new NotFoundException('Nenhum Serviço encontrado');
    }

    return resultado;
  }

  async criar(criarServicoCommand: CriarServicoCommand): Promise<Servico> {
    const servico = await this.servicoRepository.criar(criarServicoCommand);

    if (!servico) {
      throw new BadRequestException('Ocorreu um erro ao cadastrar serviço');
    }
    return servico;
  }

  async buscar(id: string) {
    const resultado = await this.servicoRepository.buscar(id);

    if (!resultado) {
      throw new NotFoundException('Serviço não encontrado');
    }
    return resultado;
  }

  async atualizar(atualizarServicoCommand: AtualizarServicoCommand) {
    try {
      await this.buscar(atualizarServicoCommand.id);
    } catch ({ message, status }) {
      throw new HttpException(message, status);
    }
    const servico = await this.servicoRepository.atualizar(
      atualizarServicoCommand,
    );

    if (!servico) {
      throw new BadRequestException('Ocorreu um erro ao atualizar serviço');
    }

    return servico;
  }
}
