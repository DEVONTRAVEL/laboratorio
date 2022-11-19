import { ApiPropertyOptional } from '@nestjs/swagger';

export class ListarDentistaCommand {
  @ApiPropertyOptional()
  cliente: number;
  @ApiPropertyOptional()
  servicoExecutado: number;
}
