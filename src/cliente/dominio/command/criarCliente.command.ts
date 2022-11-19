import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { IsCpfUnique } from '../decorator/IsCpfUnique.decorator';

export class CriarClienteCommand {
  @ApiProperty()
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  @IsString({ message: 'Nome deve ser um texto' })
  nome: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'CPF é obrigatório' })
  @IsInt({ message: 'CPF deve ser um número' })
  @IsCpfUnique({ message: 'CPF já cadastrado' })
  cpf: number;
}
