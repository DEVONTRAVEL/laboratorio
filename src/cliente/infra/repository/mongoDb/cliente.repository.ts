import { Injectable } from '@nestjs/common';
import { AtualizarClienteCommand } from 'src/cliente/dominio/command/atualizarCliente.command';
import { CriarClienteCommand } from 'src/cliente/dominio/command/criarCliente.command';
import { Cliente } from 'src/cliente/dominio/model/cliente.model';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class ClienteRepository {
  constructor(private prismaService: PrismaService) { }

  async listar(): Promise<Cliente[] | false> {
    try {
      const resultado = await this.prismaService.cliente.findMany();

      if (resultado.length <= 0) {
        return false;
      }

      return resultado;
    } catch (error) {
      return false;
    }
  }

  async criar(
    criarClienteCommand: CriarClienteCommand,
  ): Promise<Cliente | false> {
    try {
      return await this.prismaService.cliente.create({
        data: criarClienteCommand,
      });
    } catch (error) {
      return false;
    }
  }

  async buscar(id: string): Promise<Cliente | false> {
    try {
      const resultado = await this.prismaService.cliente.findUnique({
        include: {
          dentista: true,
        },
        where: {
          id,
        },
      });

      if (!resultado) {
        return false;
      }

      return resultado;
    } catch (error) {
      return false;
    }
  }

  async verificarCpfExistente(cpf: string): Promise<boolean> {
    const cliente = await this.prismaService.cliente.findUnique({
      where: {
        cpf,
      },
    });

    if (!cliente) {
      return true;
    }

    return false;
  }

  async atualizar({
    id,
    data,
  }: AtualizarClienteCommand): Promise<Cliente | false> {
    try {
      if (!data.cpf) delete data.cpf;
      if (!data.nome) delete data.nome;

      return await this.prismaService.cliente.update({
        data,
        where: {
          id,
        },
      });
    } catch (error) {
      return false;
    }
  }
}
