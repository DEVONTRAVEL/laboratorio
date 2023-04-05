import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtGuard } from 'src/core/auth/guard/jwt.guard';
import { CriaUsuarioCommand } from 'src/usuario/dominio/command/criaUsuario.command';
import { BuscarUsuarioQuery } from 'src/usuario/dominio/query/buscarUsuario.query';
import { ListarUsuariosQuery } from 'src/usuario/dominio/query/listarUsuarios.query';
import { UsuarioService } from '../service/usuario.service';

@ApiTags('Usuário')
@Controller({path:"usuario", version: "1"})
@UseGuards(JwtGuard)
@ApiBearerAuth()
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @ApiOperation({ summary: 'Lista todos os usuários' })
  @Get()
  async listar(): Promise<ListarUsuariosQuery[]> {
    return await this.usuarioService.listar();
  }

  @ApiOperation({ summary: 'Busca um usuário' })
  @Get(':id')
  async buscar(@Param('id') id: string): Promise<BuscarUsuarioQuery> {
    return await this.usuarioService.buscar(id);
  }

  @ApiOperation({ summary: 'Cria um novo usuário' })
  @Post()
  async criar(@Body() criaUsuarioCommand: CriaUsuarioCommand) {
    return await this.usuarioService.criar(criaUsuarioCommand);
  }
}
