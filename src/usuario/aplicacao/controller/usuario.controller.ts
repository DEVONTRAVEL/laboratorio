import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CriaUsuarioCommand } from 'src/usuario/dominio/command/criaUsuario.command';
import { ListarUsuariosQuery } from 'src/usuario/dominio/query/listarUsuarios.query';
import { UsuarioService } from '../service/usuario.service';

@ApiTags('Usuário')
@Controller('usuario')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Get()
  async listar(): Promise<ListarUsuariosQuery[]> {
    return await this.usuarioService.listar();
  }

  @Post()
  async criar(@Body() criaUsuarioCommand: CriaUsuarioCommand) {
    return await this.usuarioService.criar(criaUsuarioCommand);
  }
}
