import { Body, Controller, Post } from '@nestjs/common';
import { LoginCommand } from '../../dominio/command/login.command';
import { AuthService } from '../service/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginCommand: LoginCommand) {
    return await this.authService.login(loginCommand);
  }
}