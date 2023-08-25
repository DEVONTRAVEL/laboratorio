import { ApiPropertyOptional } from '@nestjs/swagger';

export class ListarServicoExecucaoCommand {
  @ApiPropertyOptional({ enum: ['true', 'false'] })
  clinica: string;
  @ApiPropertyOptional({ enum: ['true', 'false'] })
  servicoExecutado: string;
  @ApiPropertyOptional({ enum: ['true', 'false'] })
  dentista: string;
  @ApiPropertyOptional({ enum: ['true', 'false'] })
  servico: string;
  @ApiPropertyOptional({ enum: ['true', 'false'] })
  paciente: string;
}
