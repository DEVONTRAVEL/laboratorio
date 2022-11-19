import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { AtualizarDentistaCommand } from 'src/dentista/dominio/command/atualizarDentista.command';
import { CriarDentistaCommand } from 'src/dentista/dominio/command/criarDentista.command';
import { Dentista } from 'src/dentista/dominio/model/dentista.model';

@Injectable()
export class DentistaRepository {
  constructor(private prismaService: PrismaService) {}

  async listar(): Promise<Dentista[] | false> {
    try {
      const resultado = await this.prismaService.dentista.findMany();

      if (resultado.length <= 0) {
        return false;
      }

      return resultado;
    } catch (error) {
      return false;
    }
  }

  async criar(
    criarDentistaCommand: CriarDentistaCommand,
  ): Promise<Dentista | false> {
    try {
      return await this.prismaService.dentista.create({
        data: criarDentistaCommand,
      });
    } catch (error) {
      return false;
    }
  }

  async buscar(id: string): Promise<Dentista | false> {
    try {
      const resultado = await this.prismaService.dentista.findUnique({
        include: {
          cliente: true,
          servicoExecutado: true,
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

  async atualizar({
    id,
    data,
  }: AtualizarDentistaCommand): Promise<Dentista | false> {
    try {
      if (!data.nome) delete data.nome;

      return await this.prismaService.dentista.update({
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
