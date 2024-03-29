import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CriarDentistaCommand {
  @ApiProperty()
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  @IsString({ message: 'Nome deve ser um texto' })
  nome: string;

  @ApiPropertyOptional()
  @IsOptional()
  cpfCnpj: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Cliente id é obrigatório' })
  @IsString({ message: 'Cliente id deve ser um texto' })
  clinicaId: string;
}
