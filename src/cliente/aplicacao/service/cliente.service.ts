import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AtualizarClienteCommand } from 'src/cliente/dominio/command/atualizarCliente.command';
import { CriarClienteCommand } from 'src/cliente/dominio/command/criarCliente.command';
import { Cliente } from 'src/cliente/dominio/model/cliente.model';
import { ClienteRepository } from 'src/cliente/infra/repository/mongoDb/cliente.repository';

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

  async criar(criarClienteCommand: CriarClienteCommand): Promise<Cliente> {
    const cliente = await this.clienteRepository.criar(criarClienteCommand);

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

  async verificarCpfExistente(cpf: number): Promise<boolean> {
    return await this.clienteRepository.verificarCpfExistente(cpf);
  }

  async atualizar(
    atualizarClienteCommand: AtualizarClienteCommand,
  ): Promise<Cliente> {
    const cliente = await this.clienteRepository.atualizar(
      atualizarClienteCommand,
    );

    if (!cliente) {
      throw new BadRequestException('Ocorreu um erro ao atualizar cliente');
    }

    return cliente;
  }
}