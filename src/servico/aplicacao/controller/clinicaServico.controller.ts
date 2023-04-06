import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CriarClinicaServicoCommand } from 'src/servico/dominio/command/criarClinicaServico.command';
import { ClinicaServicoService } from '../service/clinicaServico.service';
import { ListarClinicaServicoCommand } from 'src/servico/dominio/command/listarClinicaServico.command';
import { ClinicaServico } from 'src/servico/dominio/model/clinicaServico.model';
import { DataAtualizarClinicaServicoCommand } from 'src/servico/dominio/command/atualizarClinicaServico.command';

@ApiTags('Serviço')
// @UseGuards(JwtGuard)
@ApiBearerAuth()
@Controller({ path: 'servico/clinica', version: '1' })
export class ClinicaServicoController {
  constructor(private clinicaServicoService: ClinicaServicoService) {}

  @ApiOperation({ summary: 'Lista todos os serviços' })
  @Get()
  async listar(
    @Query() listarClinicaServicoCommand: ListarClinicaServicoCommand,
  ): Promise<ClinicaServico[]> {
    return await this.clinicaServicoService.listar(listarClinicaServicoCommand);
  }

  @ApiOperation({ summary: 'Busca um serviço' })
  @Get(':id')
  async buscar(@Param('id') id: string): Promise<ClinicaServico> {
    return await this.clinicaServicoService.buscar(id);
  }

  @ApiOperation({ summary: 'Atualiza um serviço' })
  @Patch(':id')
  async atualizar(
    @Body()
    dataAtualizarClinicaServicoCommand: DataAtualizarClinicaServicoCommand,
    @Param('id') id: string,
  ) {
    return await this.clinicaServicoService.atualizar({
      id,
      data: dataAtualizarClinicaServicoCommand,
    });
  }

  @ApiOperation({ summary: 'Cria um novo serviço' })
  @Post()
  async criar(
    @Body() criarClinicaServicoCommand: CriarClinicaServicoCommand,
  ): Promise<ClinicaServico> {
    return await this.clinicaServicoService.criar(criarClinicaServicoCommand);
  }

  @Post('cliente')
  async criarClinicaClinicaServico(
    @Body()
    criarClinicaClinicaServicoCommand: CriarClinicaServicoCommand,
  ) {
    return await this.clinicaServicoService.criar(
      criarClinicaClinicaServicoCommand,
    );
  }
}
