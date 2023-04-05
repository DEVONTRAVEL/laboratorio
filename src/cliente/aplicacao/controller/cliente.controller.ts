import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { DataAtualizarClienteCommand } from 'src/cliente/dominio/command/atualizarCliente.command';
import { CriarClienteCommand } from 'src/cliente/dominio/command/criarCliente.command';
import { Cliente } from 'src/cliente/dominio/model/cliente.model';
import { JwtGuard } from 'src/core/auth/guard/jwt.guard';
import { ClienteService } from '../service/cliente.service';
import { version } from 'os';

@ApiTags('Cliente')
@UseGuards(JwtGuard)
@ApiBearerAuth()
@Controller({ path: 'cliente', version: '1' })
export class ClienteController {
  constructor(private clienteService: ClienteService) {}

  @ApiOperation({ summary: 'Lista todos os clientes' })
  @Get()
  async listar(): Promise<Cliente[]> {
    return await this.clienteService.listar();
  }

  @ApiOperation({ summary: 'Busca um cliente' })
  @Get(':id')
  async buscar(@Param('id') id: string): Promise<Cliente> {
    return await this.clienteService.buscar(id);
  }

  @ApiOperation({ summary: 'Busca um cliente' })
  @Patch(':id')
  async atualizar(
    @Param('id') id: string,
    @Body() data: DataAtualizarClienteCommand,
  ): Promise<Cliente> {
    return await this.clienteService.atualizar({
      id,
      data,
    });
  }

  @ApiOperation({ summary: 'Cria um novo cliente' })
  @Post()
  async criar(
    @Body() criarClienteCommand: CriarClienteCommand,
  ): Promise<Cliente> {
    return await this.clienteService.criar(criarClienteCommand);
  }
}
