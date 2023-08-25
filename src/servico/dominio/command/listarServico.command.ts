import { ApiPropertyOptional } from '@nestjs/swagger';

export class ListarServicoCommand {
  @ApiPropertyOptional({ enum: ['true', 'false'] })
  clinicaServico: string;
}
