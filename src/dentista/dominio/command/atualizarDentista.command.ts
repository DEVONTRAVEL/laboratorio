import { ApiProperty } from '@nestjs/swagger';

export class DataAtualizarDentistaCommand {
  @ApiProperty()
  nome: string;
}

export class AtualizarDentistaCommand {
  @ApiProperty()
  id: string;
  data: DataAtualizarDentistaCommand;
}
