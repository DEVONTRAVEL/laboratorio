import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CriarClienteServicoCommand {
  @ApiProperty()
  @IsString({ message: 'Serviço id deve ser um texto' })
  @IsNotEmpty({ message: 'Serviço Id é obrigatório' })
  servicoId: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Cliente id é obrigatório' })
  @IsString({ message: 'Cliente id deve ser um texto' })
  clienteId: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Valor é obrigatório' })
  valor: number;
}
