import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CriarClinicaServicoCommand {
  @ApiProperty()
  @IsString({ message: 'Serviço id deve ser um texto' })
  @IsNotEmpty({ message: 'Serviço Id é obrigatório' })
  servicoId: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Clinica id é obrigatório' })
  @IsString({ message: 'Clinica id deve ser um texto' })
  clinicaId: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Valor é obrigatório' })
  valor: number;
}
