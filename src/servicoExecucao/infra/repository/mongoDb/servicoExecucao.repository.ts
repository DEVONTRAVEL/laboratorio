import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { AtualizarServicoExecucaoCommand } from 'src/servicoExecucao/dominio/command/atualizarServicoExecucao.command';
import { CriarServicoExecucaoCommand } from 'src/servicoExecucao/dominio/command/criarServicoExecucao.command';
import { ListarServicoExecucaoCommand } from 'src/servicoExecucao/dominio/command/listarServicoExecucao.command';
import { ServicoExecucao } from 'src/servicoExecucao/dominio/model/servicoExecucao.model';

@Injectable()
export class ServicoExecucaoRepository {
  constructor(private prismaService: PrismaService) {}

  async listar({
    clinica,
    dentista,
    servico,
    paciente,
  }: ListarServicoExecucaoCommand): Promise<ServicoExecucao[] | false> {
    try {
      const resultado = await this.prismaService.servicoExecucao.findMany({
        include: {
          clinica: clinica == 'true' ? true : false,
          dentista: dentista == 'true' ? true : false,
          servico: servico == 'true' ? true : false,
          paciente: paciente == 'true' ? true : false,
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

  async criar(
    criarServicoExecucaoCommand: CriarServicoExecucaoCommand,
  ): Promise<ServicoExecucao | false> {
    try {
      return await this.prismaService.servicoExecucao.create({
        data: criarServicoExecucaoCommand,
      });
    } catch (error) {
      return false;
    }
  }

  async buscar(id: string): Promise<ServicoExecucao | false> {
    try {
      const resultado = await this.prismaService.servicoExecucao.findUnique({
        include: {
          clinica: true,
          dentista: true,
          servico: true,
          paciente: true,
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
  }: AtualizarServicoExecucaoCommand): Promise<ServicoExecucao | false> {
    try {
      if (!data.nome) delete data.nome;

      return await this.prismaService.servicoExecucao.update({
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
