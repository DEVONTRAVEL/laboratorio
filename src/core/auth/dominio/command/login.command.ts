import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginCommand {
  @IsEmail()
  @IsNotEmpty({message:"E-mail é obrigatório"})
  @ApiProperty()
  email: string;

  @IsNotEmpty({message:"Senha é obrigatório"})
  @ApiProperty()
  senha: string;
}
