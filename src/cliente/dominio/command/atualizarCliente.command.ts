import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsCpfUnique } from '../decorator/IsCpfUnique.decorator';

export class DataAtualizarClienteCommand {
  @ApiPropertyOptional()
  nome: string;

  @ApiPropertyOptional()
  @IsCpfUnique({ message: 'CPF já cadastrado' })
  cpf: number;
}

export class AtualizarClienteCommand {
  id: string;
  data: DataAtualizarClienteCommand;
}
