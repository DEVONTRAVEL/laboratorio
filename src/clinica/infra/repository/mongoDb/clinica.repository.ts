import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { AtualizarClinicaCommand } from 'src/clinica/dominio/command/atualizarClinica.command';
import { ListarClinicaCommand } from 'src/clinica/dominio/command/listarClinica.command';
import { CriarClinicaCommand } from 'src/clinica/dominio/command/criarClinica.command';
import { Clinica } from 'src/clinica/dominio/model/clinica.model';

@Injectable()
export class ClinicaRepository {
  constructor(private prismaService: PrismaService) {}

  async listar({ cliente }: ListarClinicaCommand): Promise<Clinica[] | false> {
    try {
      const resultado = await this.prismaService.clinica.findMany({
        include: {
          cliente: cliente == 'true' ? true : false,
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
    criarClinicaCommand: CriarClinicaCommand,
  ): Promise<Clinica | false> {
    try {
      return await this.prismaService.clinica.create({
        data: criarClinicaCommand,
      });
    } catch (error) {
      return false;
    }
  }

  async buscar(id: string): Promise<Clinica | false> {
    try {
      const resultado = await this.prismaService.clinica.findUnique({
        include: {
          cliente: true,
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

  async atualizar({
    id,
    data,
  }: AtualizarClinicaCommand): Promise<Clinica | false> {
    try {
      if (!data.nome) delete data.nome;

      return await this.prismaService.clinica.update({
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
