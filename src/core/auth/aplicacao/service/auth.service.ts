import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginCommand } from '../../dominio/command/login.command';
import { AuthRepository } from '../../infra/repository/mongodb/auth.repository';

@Injectable()
export class AuthService {
  constructor(
    private authRepository: AuthRepository,
    private jwtService: JwtService,
  ) {}

  async login(loginCommand: LoginCommand) {
    const usuario = await this.authRepository.login(loginCommand);

    if (!usuario) {
      throw new NotFoundException('Usuário não encontrada');
    }

    return {
      nome: usuario.nome,
      token: this.jwtService.sign(usuario),
    };
  }
}
