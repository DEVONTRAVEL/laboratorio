import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { ClienteService } from 'src/cliente/aplicacao/service/cliente.service';

@Injectable()
@ValidatorConstraint({ name: 'isRealClient', async: true })
export class IsRealClientValidator implements ValidatorConstraintInterface {
  constructor(private clienteService: ClienteService) {}

  async validate(clienteId: string, args: ValidationArguments) {
    try {
      await this.clienteService.buscar(clienteId);
    } catch (error) {
      return false;
    }

    return true;
  }
}

export const IsRealClient = (opcoesDeValidacao: ValidationOptions) => {
  return (objeto: Object, propriedade: any) => {
    registerDecorator({
      target: objeto.constructor,
      propertyName: propriedade,
      options: opcoesDeValidacao,
      constraints: [],
      validator: IsRealClientValidator,
    });
  };
};
