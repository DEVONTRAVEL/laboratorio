import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { AtualizarEtapaCommand } from 'src/servico/dominio/command/atualizarEtapa.command';
import { CriarEtapaCommand } from 'src/servico/dominio/command/criarEtapa.command';
import { Etapa } from 'src/servico/dominio/model/etapa.model';

@Injectable()
export class EtapaRepository {
  constructor(private prismaService: PrismaService) {}

  async listar(): Promise<Etapa[] | false> {
    try {
      const resultado = await this.prismaService.etapa.findMany();

      if (!resultado) {
        return false;
      }

      return resultado;
    } catch (error) {
      return false;
    }
  }

  async buscar(id: string): Promise<Etapa | false> {
    try {
      const resultado = await this.prismaService.etapa.findFirst({
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

  async criar(data: CriarEtapaCommand): Promise<Etapa | false> {
    try {
      return await this.prismaService.etapa.create({
        data,
      });
    } catch (error) {
      return false;
    }
  }

  async atualizar({ data, id }: AtualizarEtapaCommand): Promise<Etapa | false> {
    try {
      if (!data.nome) delete data.nome;

      const resultado = await this.prismaService.etapa.update({
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
