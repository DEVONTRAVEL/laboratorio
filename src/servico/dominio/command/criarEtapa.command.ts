import { IsNotEmpty } from 'class-validator';
import { IsRealServico } from '../decorator/isRealServicot.decorator';

export class CriarEtapaCommand {
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  nome: string;

  @IsNotEmpty({ message: 'Valor é obrigatório' })
  valor: number;

  @IsRealServico({ message: 'Serviço não encontrado' })
  @IsNotEmpty({ message: 'Serviço Id é obrigatório' })
  servicoId: string;
}
