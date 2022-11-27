import {
  BadRequestException,
  HttpException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CriaUsuarioCommand } from 'src/usuario/dominio/command/criaUsuario.command';
import { Usuario } from 'src/usuario/dominio/model/usuario.model';
import { BuscarUsuarioQuery } from 'src/usuario/dominio/query/buscarUsuario.query';
import { ListarUsuariosQuery } from 'src/usuario/dominio/query/listarUsuarios.query';
import { UsuarioRepository } from 'src/usuario/infra/repository/mongoDb/usuario.repository';

@Injectable()
export class UsuarioService {
  constructor(private usuarioRepository: UsuarioRepository) {}

  async listar(): Promise<ListarUsuariosQuery[]> {
    try {
      const resultado = await this.usuarioRepository.listar();

      if (!resultado) {
        throw new NotFoundException('Nenhum usuário encontrado');
      }

      return resultado;
    } catch ({ message, status }) {
      throw new HttpException(message, status);
    }
  }

  async buscar(id: string): Promise<BuscarUsuarioQuery> {
    try {
      const resultado = await this.usuarioRepository.buscar(id);

      if (!resultado) {
        throw new NotFoundException('Nenhum usuário encontrado');
      }

      return resultado;
    } catch ({ message, status }) {
      throw new HttpException(message, status);
    }
  }

  async criar(criaUsuarioCommand: CriaUsuarioCommand): Promise<Usuario> {
    try {
      const usuario = await this.usuarioRepository.criar(criaUsuarioCommand);

      if (!usuario) {
        throw new BadRequestException('Não foi possível cadastrar o usuário');
      }

      return usuario;
    } catch ({ message, status }) {
      throw new HttpException(message, status);
    }
  }
}
