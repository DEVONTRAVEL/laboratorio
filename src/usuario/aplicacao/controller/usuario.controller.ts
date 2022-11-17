import { Controller, Get } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { UsuarioService } from '../service/usuario.service';

@Controller('usuario')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Get()
  async listar() {
    return await this.usuarioService.listar();
  }
}
