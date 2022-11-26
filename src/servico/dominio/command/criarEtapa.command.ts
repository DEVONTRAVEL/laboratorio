import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { IsRealServico } from '../decorator/isRealServicot.decorator';

export class CriarEtapaCommand {
  @ApiProperty()
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  nome: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Valor é obrigatório' })
  valor: number;

  @ApiProperty()
  @IsRealServico({ message: 'Serviço não encontrado' })
  @IsNotEmpty({ message: 'Serviço Id é obrigatório' })
  servicoId: string;
}
