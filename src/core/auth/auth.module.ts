import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { AuthController } from './aplicacao/controller/auth.controller';
import { AuthService } from './aplicacao/service/auth.service';
import { JwtStrategy } from './aplicacao/service/jwt.service';
import { AuthRepository } from './infra/repository/mongodb/auth.repository';
@Module({
  imports: [
    JwtModule.register({
      secret: `${process.env.JWT_SECRET}`,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [JwtStrategy, AuthService, AuthRepository, PrismaService],
})
export class AuthModule {}
