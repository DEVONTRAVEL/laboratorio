import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { IsCpfUnique } from '../decorator/IsCpfUnique.decorator';

export class CriarClienteCommand {
  @ApiProperty()
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  @IsString({ message: 'Nome deve ser um texto' })
  nome: string;

  @ApiPropertyOptional()
  @IsCpfUnique({ message: 'CPF CNPJ já cadastrado' })
  cpfCnpj: string;
}
