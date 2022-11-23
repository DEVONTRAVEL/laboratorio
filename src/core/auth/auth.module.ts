import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { AuthController } from './aplicacao/controller/auth.controller';
import { AuthService } from './aplicacao/service/auth.service';
import { JwtStrategy } from './aplicacao/service/jwt.service';
import { AuthRepository } from './infra/repository/mongodb/auth.repository';
@Module({
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: {
          expiresIn: '1h',
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [JwtStrategy, AuthService, AuthRepository, PrismaService],
})
export class AuthModule {}
