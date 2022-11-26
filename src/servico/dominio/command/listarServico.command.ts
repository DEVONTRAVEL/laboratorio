import { ApiPropertyOptional } from '@nestjs/swagger';

export class ListarServicoCommand {
  @ApiPropertyOptional({ enum: ['true', 'false'] })
  etapa: string;
}
