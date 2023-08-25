import { Injectable } from '@nestjs/common';
import { log } from 'console';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { AtualizarClinicaServicoCommand } from 'src/servico/dominio/command/atualizarClinicaServico.command';
import { AtualizarServicoCommand } from 'src/servico/dominio/command/atualizarServico.command';
import { CriarClinicaServicoCommand } from 'src/servico/dominio/command/criarClinicaServico.command';
import { ListarClinicaServicoCommand } from 'src/servico/dominio/command/listarClinicaServico.command';

import { ClinicaServico } from 'src/servico/dominio/model/clinicaServico.model';
import { Servico } from 'src/servico/dominio/model/servico.model';

@Injectable()
export class ClinicaServicoRepository {
  constructor(private prismaService: PrismaService) {}

  async listar({
    clinica,
    servico,
    servicoId,
    clinicaId,
    exclusao,
  }: ListarClinicaServicoCommand): Promise<ClinicaServico[] | false> {
    try {
      const wheres = {
        exclusao: exclusao === 'true',
        servicoId,
        clinicaId,
      };

      if (!exclusao) delete wheres.exclusao;
      if (!servicoId) delete wheres.servicoId;
      if (!clinicaId) delete wheres.clinicaId;

      const resultado = await this.prismaService.clinicaServico.findMany({
        include: {
          clinica: clinica == 'true' ? true : false,
          servico: servico == 'true' ? true : false,
        },
        where: wheres,
      });

      if (resultado.length <= 0) {
        return false;
      }

      return resultado;
    } catch (error) {
      return false;
    }
  }

  async criar(data: CriarClinicaServicoCommand) {
    try {
      return await this.prismaService.clinicaServico.create({
        data,
      });
    } catch (error) {
      return false;
    }
  }

  async buscar(id: string) {
    try {
      const resultado = await this.prismaService.clinicaServico.findFirst({
        include: {
          clinica: true,
          servico: true,
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
  }: AtualizarClinicaServicoCommand): Promise<ClinicaServico | false> {
    try {
      if (!data.valor) delete data.valor;
      if (!data.exclusao) delete data.exclusao;

      const resultado = await this.prismaService.clinicaServico.update({
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
