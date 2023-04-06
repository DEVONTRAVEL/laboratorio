import { ApiProperty } from '@nestjs/swagger';

export class DataAtualizarClinicaServicoCommand {
  @ApiProperty()
  valor: number;

  @ApiProperty()
  exclusao: boolean;
}

export class AtualizarClinicaServicoCommand {
  @ApiProperty()
  id: string;
  data: DataAtualizarClinicaServicoCommand;
}
