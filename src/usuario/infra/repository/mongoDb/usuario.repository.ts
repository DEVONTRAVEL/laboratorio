import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CriaUsuarioCommand } from 'src/usuario/dominio/command/criaUsuario.command';
import { Usuario } from 'src/usuario/dominio/model/usuario.model';
import { BuscarUsuarioQuery } from 'src/usuario/dominio/query/buscarUsuario.query';
import { ListarUsuariosQuery } from 'src/usuario/dominio/query/listarUsuarios.query';

@Injectable()
export class UsuarioRepository {
  constructor(private prismaService: PrismaService) {}

  async listar(): Promise<ListarUsuariosQuery[] | false> {
    try {
      const resultado = await this.prismaService.usuario.findMany({
        select: {
          id: true,
          email: true,
          nome: true,
          senha: false,
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

  async buscar(id: string): Promise<BuscarUsuarioQuery | false> {
    try {
      const resultado = await this.prismaService.usuario.findFirst({
        select: {
          id: true,
          email: true,
          nome: true,
          senha: false,
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

  async criar(
    criaUsuarioCommand: CriaUsuarioCommand,
  ): Promise<Usuario | false> {
    try {
      return await this.prismaService.usuario.create({
        data: criaUsuarioCommand,
      });
    } catch (error) {
      return false;
    }
  }
}
