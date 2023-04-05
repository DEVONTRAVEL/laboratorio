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
import { DataAtualizarServicoCommand } from 'src/servico/dominio/command/atualizarServico.command';
import { CriarClienteServicoCommand } from 'src/servico/dominio/command/criarClienteServico.command';
import { CriarServicoCommand } from 'src/servico/dominio/command/criarServico.command';
import { ListarServicoCommand } from 'src/servico/dominio/command/listarServico.command';
import { Servico } from 'src/servico/dominio/model/servico.model';
import { ServicoService } from '../service/servico.service';

@ApiTags('Serviço')
// @UseGuards(JwtGuard)
@ApiBearerAuth()
@Controller('servico')
export class ServicoController {
  constructor(private servicoService: ServicoService) {}

  @ApiOperation({ summary: 'Lista todos os serviços' })
  @Get()
  async listar(
    @Query() listarServicoCommand: ListarServicoCommand,
  ): Promise<Servico[]> {
    return await this.servicoService.listar(listarServicoCommand);
  }

  @ApiOperation({ summary: 'Busca um serviço' })
  @Get(':id')
  async buscar(@Param('id') id: string): Promise<Servico> {
    return await this.servicoService.buscar(id);
  }

  @ApiOperation({ summary: 'Atualiza um serviço' })
  @Patch(':id')
  async atualizar(
    @Body() dataAtualizarServicoCommand: DataAtualizarServicoCommand,
    @Param('id') id: string,
  ) {
    return await this.servicoService.atualizar({
      id,
      data: dataAtualizarServicoCommand,
    });
  }

  @ApiOperation({ summary: 'Cria um novo serviço' })
  @Post()
  async criar(
    @Body() criarServicoCommand: CriarServicoCommand,
  ): Promise<Servico> {
    return await this.servicoService.criar(criarServicoCommand);
  }

  @Post('cliente')
  async criarClienteServico(
    @Body() criarClienteServicoCommand: CriarClienteServicoCommand,
  ) {
    return await this.servicoService.criarClienteServico(
      criarClienteServicoCommand,
    );
  }
}
