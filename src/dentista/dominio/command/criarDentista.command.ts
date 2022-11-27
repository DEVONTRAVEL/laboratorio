import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CriarDentistaCommand {
  @ApiProperty()
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  @IsString({ message: 'Nome deve ser um texto' })
  nome: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Cliente id é obrigatório' })
  @IsString({ message: 'Cliente id deve ser um texto' })
  clienteId: string;
}
