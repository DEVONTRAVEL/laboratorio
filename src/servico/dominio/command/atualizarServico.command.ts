import { ApiProperty } from '@nestjs/swagger';

export class DataAtualizarServicoCommand {
  @ApiProperty()
  nome: string;
}

export class AtualizarServicoCommand {
  @ApiProperty()
  id: string;
  data: DataAtualizarServicoCommand;
}
