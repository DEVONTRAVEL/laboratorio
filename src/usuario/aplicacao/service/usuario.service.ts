import { Injectable, NotFoundException } from '@nestjs/common';
import { UsuarioRepository } from 'src/usuario/infra/repository/mongoDb/usuario.repository';

@Injectable()
export class UsuarioService {
  constructor(private usuarioRepository: UsuarioRepository) {}
  async listar() {
    const resultado = await this.usuarioRepository.listar();

    if (!resultado) {
      throw new NotFoundException('Nenhum usuário encontrado');
    }

    return resultado;
  }
}
