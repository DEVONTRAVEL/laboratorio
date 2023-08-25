import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { AtualizarServicoCommand } from 'src/servico/dominio/command/atualizarServico.command';
import { CriarServicoCommand } from 'src/servico/dominio/command/criarServico.command';
import { ListarServicoCommand } from 'src/servico/dominio/command/listarServico.command';
import { Servico } from 'src/servico/dominio/model/servico.model';

@Injectable()
export class ServicoRepository {
  constructor(private prismaService: PrismaService) {}

  async listar({
    clinicaServico,
  }: ListarServicoCommand): Promise<Servico[] | false> {
    try {
      const resultado = await this.prismaService.servico.findMany({
        include: {
          clinicaServico: clinicaServico == 'true' ? true : false,
        },
      });

      if (resultado.length <= 0) {
        return false;
      }

      return resultado;
    } catch (error) {
      return false;
    }
  }

  async criar(data: CriarServicoCommand) {
    try {
      return await this.prismaService.servico.create({
        data,
      });
    } catch (error) {
      return false;
    }
  }

  async buscar(id: string) {
    try {
      const resultado = await this.prismaService.servico.findFirst({
        include: {
          clinicaServico: true,
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
  }: AtualizarServicoCommand): Promise<Servico | false> {
    try {
      if (!data.nome) delete data.nome;

      const resultado = await this.prismaService.servico.update({
        data,
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
}
