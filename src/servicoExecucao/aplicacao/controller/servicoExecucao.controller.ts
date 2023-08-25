import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/core/auth/guard/jwt.guard';
import { ListarServicoExecucaoCommand } from 'src/servicoExecucao/dominio/command/listarServicoExecucao.command';
import { DataAtualizarServicoExecucaoCommand } from 'src/servicoExecucao/dominio/command/atualizarServicoExecucao.command';
import { CriarServicoExecucaoCommand } from 'src/servicoExecucao/dominio/command/criarServicoExecucao.command';
import { ServicoExecucaoService } from '../service/servicoExecucao.service';
import { ServicoExecucao } from 'src/servicoExecucao/dominio/model/servicoExecucao.model';

@ApiTags('ServicoExecucao')
@UseGuards(JwtGuard)
@ApiBearerAuth()
@Controller({path:"dentista", version:"1"})
export class ServicoExecucaoController {
  constructor(private dentistaService: ServicoExecucaoService) {}

  @ApiOperation({ summary: 'Lista todos os dentista' })
  @Get()
  async listar(
    @Query() listarServicoExecucaoCommand: ListarServicoExecucaoCommand,
  ): Promise<ServicoExecucao[]> {
    return await this.dentistaService.listar(listarServicoExecucaoCommand);
  }

  @ApiOperation({ summary: 'Busca um dentista' })
  @Get(':id')
  async buscar(@Param('id') id: string): Promise<ServicoExecucao> {
    return await this.dentistaService.buscar(id);
  }

  @ApiOperation({ summary: 'Atualiza um dentista' })
  @Patch(':id')
  async atualizar(
    @Param('id') id: string,
    @Body() data: DataAtualizarServicoExecucaoCommand,
  ): Promise<ServicoExecucao> {
    return await this.dentistaService.atualizar({
      id,
      data,
    });
  }

  @ApiOperation({ summary: 'Cria um novo dentista' })
  @Post()
  async criar(
    @Body() criarServicoExecucaoCommand: CriarServicoExecucaoCommand,
  ): Promise<ServicoExecucao> {
    return await this.dentistaService.criar(criarServicoExecucaoCommand);
  }
}
