import { IsNotEmpty, IsString } from 'class-validator';

export class LoginCommand {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  senha: string;
}
