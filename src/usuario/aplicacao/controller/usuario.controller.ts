import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtGuard } from 'src/core/auth/guard/jwt.guard';
import { CriaUsuarioCommand } from 'src/usuario/dominio/command/criaUsuario.command';
import { ListarUsuariosQuery } from 'src/usuario/dominio/query/listarUsuarios.query';
import { UsuarioService } from '../service/usuario.service';

@ApiTags('Usuário')
@Controller('usuario')
@UseGuards(JwtGuard)
@ApiBearerAuth()
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @ApiOperation({ summary: 'Lista todos os usuários' })
  @Get()
  async listar(): Promise<ListarUsuariosQuery[]> {
    return await this.usuarioService.listar();
  }

  @ApiOperation({ summary: 'Cria um novo usuário' })
  @Post()
  async criar(@Body() criaUsuarioCommand: CriaUsuarioCommand) {
    return await this.usuarioService.criar(criaUsuarioCommand);
  }
}
