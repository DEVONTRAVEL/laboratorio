import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/core/auth/guard/jwt.guard';
import { CriarEtapaCommand } from 'src/servico/dominio/command/criarEtapa.command';
import { Etapa } from 'src/servico/dominio/model/etapa.model';
import { EtapaService } from '../service/etapa.service';

@ApiTags('Etapa')
@UseGuards(JwtGuard)
@ApiBearerAuth()
@Controller('etapa')
export class EtapaController {
  constructor(private etapaService: EtapaService) {}

  @Get()
  async listar(): Promise<Etapa[]> {
    return await this.etapaService.listar();
  }

  @Get(':id')
  async buscar(@Param('id') id: string): Promise<Etapa> {
    return await this.etapaService.buscar(id);
  }

  @Post()
  async criar(@Body() criarEtapaCommand: CriarEtapaCommand): Promise<Etapa> {
    return await this.etapaService.criar(criarEtapaCommand);
  }
}
