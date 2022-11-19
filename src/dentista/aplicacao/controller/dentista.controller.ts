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
import { DataAtualizarDentistaCommand } from 'src/dentista/dominio/command/atualizarDentista.command';
import { ListarDentistaCommand } from 'src/dentista/dominio/command/listarDentista.command';
import { CriarDentistaCommand } from 'src/dentista/dominio/command/criarDentista.command';
import { Dentista } from 'src/dentista/dominio/model/dentista.model';
import { DentistaService } from '../service/dentista.service';

@ApiTags('Dentista')
@UseGuards(JwtGuard)
@ApiBearerAuth()
@Controller('dentista')
export class DentistaController {
  constructor(private dentistaService: DentistaService) {}

  @ApiOperation({ summary: 'Lista todos os dentista' })
  @Get()
  async listar(
    @Query() listarDentistaCommand: ListarDentistaCommand,
  ): Promise<Dentista[]> {
    return await this.dentistaService.listar(listarDentistaCommand);
  }

  @ApiOperation({ summary: 'Busca um dentista' })
  @Get(':id')
  async buscar(@Param('id') id: string): Promise<Dentista> {
    return await this.dentistaService.buscar(id);
  }

  @ApiOperation({ summary: 'Atualiza um dentista' })
  @Patch(':id')
  async atualizar(
    @Param('id') id: string,
    @Body() data: DataAtualizarDentistaCommand,
  ): Promise<Dentista> {
    return await this.dentistaService.atualizar({
      id,
      data,
    });
  }

  @ApiOperation({ summary: 'Cria um novo dentista' })
  @Post()
  async criar(
    @Body() criarDentistaCommand: CriarDentistaCommand,
  ): Promise<Dentista> {
    return await this.dentistaService.criar(criarDentistaCommand);
  }
}
