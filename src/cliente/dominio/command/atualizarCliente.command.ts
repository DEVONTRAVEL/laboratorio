import { ApiPropertyOptional } from '@nestjs/swagger';

export class DataAtualizarClienteCommand {
  @ApiPropertyOptional()
  nome: string;

  @ApiPropertyOptional()
  cpfCnpj: string;
}

export class AtualizarClienteCommand {
  id: string;
  data: DataAtualizarClienteCommand;
}
