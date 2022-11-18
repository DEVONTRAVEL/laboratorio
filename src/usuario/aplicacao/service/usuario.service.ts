import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CriaUsuarioCommand } from 'src/usuario/dominio/command/criaUsuario.command';
import { ListarUsuariosQuery } from 'src/usuario/dominio/query/listarUsuarios.query';
import { UsuarioModel } from 'src/usuario/dominio/usuario.model';
import { UsuarioRepository } from 'src/usuario/infra/repository/mongoDb/usuario.repository';

@Injectable()
export class UsuarioService {
  constructor(private usuarioRepository: UsuarioRepository) {}

  async listar(): Promise<ListarUsuariosQuery[]> {
    const resultado = await this.usuarioRepository.listar();

    if (!resultado) {
      throw new NotFoundException('Nenhum usuário encontrado');
    }

    return resultado;
  }

  async criar(criaUsuarioCommand: CriaUsuarioCommand) {
    const usuario = await this.usuarioRepository.criar(criaUsuarioCommand);

    if (!usuario) {
      throw new BadRequestException('Não foi possível cadastrar o usuário');
    }

    return usuario;
  }
}
