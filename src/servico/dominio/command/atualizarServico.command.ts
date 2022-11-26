import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class DataAtualizarServicoCommand {
  @ApiPropertyOptional()
  nome: string;
}

export class AtualizarServicoCommand {
  @ApiProperty()
  id: string;
  data: DataAtualizarServicoCommand;
}
