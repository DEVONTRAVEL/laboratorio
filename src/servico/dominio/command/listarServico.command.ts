import { ApiPropertyOptional } from '@nestjs/swagger';

export class ListarServicoCommand {
  @ApiPropertyOptional()
  etapa: number;
}
