import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { ServicoService } from 'src/servico/aplicacao/service/servico.service';

@Injectable()
@ValidatorConstraint({ name: 'isRealClient', async: true })
export class IsRealServicoValidator implements ValidatorConstraintInterface {
  constructor(private servicoService: ServicoService) {}

  async validate(servicoId: string, args: ValidationArguments) {
    try {
      await this.servicoService.buscar(servicoId);
    } catch (error) {
      return false;
    }

    return true;
  }
}

export const IsRealServico = (opcoesDeValidacao: ValidationOptions) => {
  return (objeto: Object, propriedade: any) => {
    registerDecorator({
      target: objeto.constructor,
      propertyName: propriedade,
      options: opcoesDeValidacao,
      constraints: [],
      validator: IsRealServicoValidator,
    });
  };
};
