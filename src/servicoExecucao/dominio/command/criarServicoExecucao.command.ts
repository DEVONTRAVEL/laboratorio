import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CriarServicoExecucaoCommand {
  dataHora: Date;

  @ApiPropertyOptional()
  @IsOptional()
  descricao?: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Clinica id é obrigatório' })
  clinicaId: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Dentista id é obrigatório' })
  dentistaId: string;

  @ApiProperty()
  servicoId: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Clinica Servico Id é obrigatório' })
  clinicaServicoId: string;

  @ApiPropertyOptional()
  @IsOptional()
  pacienteId?: string;
}
