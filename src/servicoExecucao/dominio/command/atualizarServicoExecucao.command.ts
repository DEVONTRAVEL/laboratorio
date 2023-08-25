import { ApiProperty } from '@nestjs/swagger';

export class DataAtualizarServicoExecucaoCommand {
  @ApiProperty()
  nome: string;
}

export class AtualizarServicoExecucaoCommand {
  @ApiProperty()
  id: string;
  data: DataAtualizarServicoExecucaoCommand;
}
