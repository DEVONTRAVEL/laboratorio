import { IsNotEmpty, IsString } from 'class-validator';

export class CriaUsuarioCommand {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  senha: string;
}
