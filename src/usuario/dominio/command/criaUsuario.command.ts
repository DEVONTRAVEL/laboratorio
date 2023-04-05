import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CriaUsuarioCommand {
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  @IsString()
  @ApiProperty()
  nome: string;

  @IsNotEmpty({ message: 'Nome é obrigatório' })
  @IsString()
  @ApiProperty()
  email: string;

  @IsNotEmpty({ message: 'Senha é obrigatório' })
  @IsString()
  @ApiProperty()
  senha: string;
}
