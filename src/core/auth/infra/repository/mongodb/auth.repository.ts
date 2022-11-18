import { Injectable } from '@nestjs/common';
import { LoginCommand } from 'src/core/auth/dominio/command/login.command';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class AuthRepository {
  constructor(private prismaService: PrismaService) {}

  async login({ email, senha }: LoginCommand) {
    try {
      const resultado = await this.prismaService.usuario.findFirst({
        where: {
          email,
          senha,
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
