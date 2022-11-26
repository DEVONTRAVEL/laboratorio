import { ApiPropertyOptional } from '@nestjs/swagger';

export class ListarDentistaCommand {
  @ApiPropertyOptional({ enum: ['true', 'false'] })
  cliente: string;
  @ApiPropertyOptional({ enum: ['true', 'false'] })
  servicoExecutado: string;
}
