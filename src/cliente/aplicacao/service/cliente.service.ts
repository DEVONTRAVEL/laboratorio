import {
  BadRequestException,
  HttpException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AtualizarClienteCommand } from 'src/cliente/dominio/command/atualizarCliente.command';
import { CriarClienteCommand } from 'src/cliente/dominio/command/criarCliente.command';
import { Cliente } from 'src/cliente/dominio/model/cliente.model';
import { ClienteRepository } from 'src/cliente/infra/repository/mongoDb/cliente.repository';
import { CpfCnpj } from 'src/core/util/cpfCnpj';

@Injectable()
export class ClienteService {
  constructor(private clienteRepository: ClienteRepository) {}

  async listar(): Promise<Cliente[]> {
    const resultado = await this.clienteRepository.listar();

    if (!resultado) {
      throw new NotFoundException('Nenhum cliente encontrado');
    }

    return resultado;
  }

  async criar({ cpfCnpj, nome }: CriarClienteCommand): Promise<Cliente> {
    const cliente = await this.clienteRepository.criar({
      nome,
      cpfCnpj: cpfCnpj ? CpfCnpj.limpar(cpfCnpj) : '',
    });

    if (!cliente) {
      throw new BadRequestException('Ocorreu um erro ao cadastrar cliente');
    }

    return cliente;
  }

  async buscar(id: string): Promise<Cliente> {
    const resultado = await this.clienteRepository.buscar(id);

    if (!resultado) {
      throw new NotFoundException('Cliente não encontrado');
    }

    return resultado;
  }

  async verificarCpfExistente(cpf: string): Promise<boolean> {
    return await this.clienteRepository.verificarCpfExistente(cpf);
  }

  async atualizar(
    atualizarClienteCommand: AtualizarClienteCommand,
  ): Promise<Cliente> {
    try {
      await this.buscar(atualizarClienteCommand.id);
    } catch ({ message, status }) {
      throw new HttpException(message, status);
    }

    const cliente = await this.clienteRepository.atualizar(
      atualizarClienteCommand,
    );

    if (!cliente) {
      throw new BadRequestException('Ocorreu um erro ao atualizar cliente');
    }

    return cliente;
  }
}
