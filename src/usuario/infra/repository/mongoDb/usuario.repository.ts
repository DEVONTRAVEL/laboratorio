import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class UsuarioRepository {
  constructor(private prismaService: PrismaService) {}

  async listar() {
    try {
      const resultado = await this.prismaService.usuario.findMany();

      if (resultado.length <= 0) {
        return false;
      }

      return resultado;
    } catch (error) {
      return false;
    }
  }
}
