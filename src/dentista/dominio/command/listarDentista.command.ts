import { ApiPropertyOptional } from '@nestjs/swagger';

export class ListarDentistaCommand {
  @ApiPropertyOptional()
  cliente: string;
  @ApiPropertyOptional()
  servicoExecutado: string;
}
