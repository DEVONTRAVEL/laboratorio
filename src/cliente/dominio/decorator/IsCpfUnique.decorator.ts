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
@ValidatorConstraint({ name: 'isCpfUnique', async: true })
export class IsCpfUniqueValidator implements ValidatorConstraintInterface {
  constructor(private clienteService: ClienteService) {}

  async validate(cpf: number, args: ValidationArguments) {
    if (!cpf) {
      return true;
    }
    return await this.clienteService.verificarCpfExistente(cpf);
  }
}

export const IsCpfUnique = (opcoesDeValidacao: ValidationOptions) => {
  return (objeto: Object, propriedade: any) => {
    registerDecorator({
      target: objeto.constructor,
      propertyName: propriedade,
      options: opcoesDeValidacao,
      constraints: [],
      validator: IsCpfUniqueValidator,
    });
  };
};
