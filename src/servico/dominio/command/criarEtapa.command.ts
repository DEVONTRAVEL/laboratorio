import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CriarEtapaCommand {
  @ApiProperty()
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  nome: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Valor é obrigatório' })
  valor: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'Serviço Id é obrigatório' })
  clinicaServicoId: string;
}
