import { Module } from '@nestjs/common';
import { ClienteController } from './aplicacao/controller/cliente.controller';

@Module({
  imports: [],
  controllers: [ClienteController],
  providers: [],
})
export class ClienteModule {}
