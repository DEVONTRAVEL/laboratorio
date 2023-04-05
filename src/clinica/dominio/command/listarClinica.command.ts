import { ApiPropertyOptional } from '@nestjs/swagger';

export class ListarClinicaCommand {
  @ApiPropertyOptional({ enum: ['true', 'false'] })
  cliente: string;
}
