import { ApiProperty } from '@nestjs/swagger';

export class DataAtualizarClinicaCommand {
  @ApiProperty()
  nome: string;
  cpfCnpj: string;
}

export class AtualizarClinicaCommand {
  @ApiProperty()
  id: string;
  data: DataAtualizarClinicaCommand;
}
