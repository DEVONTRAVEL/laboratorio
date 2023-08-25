import { ApiPropertyOptional } from '@nestjs/swagger';

export class ListarClinicaServicoCommand {
  @ApiPropertyOptional({ enum: ['true', 'false'] })
  clinica: string;

  @ApiPropertyOptional({ enum: ['true', 'false'] })
  servico: string;

  @ApiPropertyOptional({ enum: ['true', 'false'] })
  exclusao: string;

  @ApiPropertyOptional()
  servicoId: string;

  @ApiPropertyOptional()
  clinicaId: string;
}
