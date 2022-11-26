import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class DataAtualizarEtapaCommand {
  @ApiPropertyOptional()
  nome: string;
}

export class AtualizarEtapaCommand {
  @ApiProperty()
  id: string;
  data: DataAtualizarEtapaCommand;
}
