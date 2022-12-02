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
import { JwtGuard } from 'src/core/auth/guard/jwt.guard';
import { DataAtualizarEtapaCommand } from 'src/servico/dominio/command/atualizarEtapa.command';
import { CriarEtapaCommand } from 'src/servico/dominio/command/criarEtapa.command';
import { Etapa } from 'src/servico/dominio/model/etapa.model';
import { EtapaService } from '../service/etapa.service';

@ApiTags('Etapa')
@UseGuards(JwtGuard)
@ApiBearerAuth()
@Controller('etapa')
export class EtapaController {
  constructor(private etapaService: EtapaService) {}

  @ApiOperation({ summary: 'Lista todos as etapas' })
  @Get()
  async listar(): Promise<Etapa[]> {
    return await this.etapaService.listar();
  }

  @ApiOperation({ summary: 'Busca uma etapa' })
  @Get(':id')
  async buscar(@Param('id') id: string): Promise<Etapa> {
    return await this.etapaService.buscar(id);
  }

  @ApiOperation({ summary: 'Cria uma nova etapa' })
  @Post()
  async criar(@Body() criarEtapaCommand: CriarEtapaCommand): Promise<Etapa> {
    return await this.etapaService.criar(criarEtapaCommand);
  }

  @ApiOperation({ summary: 'Atualiza uma etapa' })
  @Patch(':id')
  async atualizar(
    @Param('id') id: string,
    @Body() data: DataAtualizarEtapaCommand,
  ) {
    return await this.etapaService.atualizar({
      id,
      data,
    });
  }
}
