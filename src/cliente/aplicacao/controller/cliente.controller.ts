import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/core/auth/guard/jwt.guard';

@ApiTags('Cliente')
@UseGuards(JwtGuard)
@ApiBearerAuth()
@Controller()
export class ClienteController {
  @ApiOperation({ summary: 'Lista todos os clientes' })
  @Get()
  async listar() {}
}
