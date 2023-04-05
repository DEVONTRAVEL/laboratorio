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
import { DataAtualizarClinicaCommand } from 'src/clinica/dominio/command/atualizarClinica.command';
import { CriarClinicaCommand } from 'src/clinica/dominio/command/criarClinica.command';
import { ListarClinicaCommand } from 'src/clinica/dominio/command/listarClinica.command';
import { Clinica } from 'src/clinica/dominio/model/clinica.model';
import { JwtGuard } from 'src/core/auth/guard/jwt.guard';
import { ClinicaService } from '../service/clinica.service';

@ApiTags('Clinica')
@UseGuards(JwtGuard)
@ApiBearerAuth()
@Controller({ path: 'clinica', version: '1' })
export class ClinicaController {
  constructor(private clinicaService: ClinicaService) {}

  @ApiOperation({ summary: 'Lista todos os clinica' })
  @Get()
  async listar(
    @Query() listarClinicaCommand: ListarClinicaCommand,
  ): Promise<Clinica[]> {
    return await this.clinicaService.listar(listarClinicaCommand);
  }

  @ApiOperation({ summary: 'Busca um clinica' })
  @Get(':id')
  async buscar(@Param('id') id: string): Promise<Clinica> {
    return await this.clinicaService.buscar(id);
  }

  @ApiOperation({ summary: 'Atualiza um clinica' })
  @Patch(':id')
  async atualizar(
    @Param('id') id: string,
    @Body() data: DataAtualizarClinicaCommand,
  ): Promise<Clinica> {
    return await this.clinicaService.atualizar({
      id,
      data,
    });
  }

  @ApiOperation({ summary: 'Cria um novo clinica' })
  @Post()
  async criar(
    @Body() criarClinicaCommand: CriarClinicaCommand,
  ): Promise<Clinica> {
    return await this.clinicaService.criar(criarClinicaCommand);
  }
}
