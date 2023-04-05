import {
  BadRequestException,
  Injectable,
  NotFoundException,
  HttpException,
} from '@nestjs/common';
import { AtualizarDentistaCommand } from 'src/dentista/dominio/command/atualizarDentista.command';
import { ListarDentistaCommand } from 'src/dentista/dominio/command/listarDentista.command';
import { CriarDentistaCommand } from 'src/dentista/dominio/command/criarDentista.command';
import { Dentista } from 'src/dentista/dominio/model/dentista.model';
import { DentistaRepository } from 'src/dentista/infra/repository/mongoDb/dentista.repository';
import { ClienteService } from 'src/cliente/aplicacao/service/cliente.service';
import { ClinicaService } from 'src/clinica/aplicacao/service/clinica.service';

@Injectable()
export class DentistaService {
  constructor(
    private dentistaRepository: DentistaRepository,
    private clinicaService: ClinicaService,
  ) {}

  async listar(
    listarDentistaCommand: ListarDentistaCommand,
  ): Promise<Dentista[]> {
    try {
      const resultado = await this.dentistaRepository.listar(
        listarDentistaCommand,
      );

      if (!resultado) {
        throw new NotFoundException('Nenhum dentista encontrado');
      }

      return resultado;
    } catch ({ message, status }) {
      throw new HttpException(message, status);
    }
  }

  async criar(criarDentistaCommand: CriarDentistaCommand): Promise<Dentista> {
    try {
      await this.clinicaService.buscar(criarDentistaCommand.clinicaId);

      const dentista = await this.dentistaRepository.criar(
        criarDentistaCommand,
      );

      if (!dentista) {
        throw new BadRequestException('Ocorreu um erro ao cadastrar dentista');
      }

      return dentista;
    } catch ({ message, status }) {
      throw new HttpException(message, status);
    }
  }

  async buscar(id: string): Promise<Dentista> {
    try {
      const resultado = await this.dentistaRepository.buscar(id);

      if (!resultado) {
        throw new NotFoundException('Dentista não encontrado');
      }

      return resultado;
    } catch ({ message, status }) {
      throw new HttpException(message, status);
    }
  }

  async atualizar(
    atualizarDentistaCommand: AtualizarDentistaCommand,
  ): Promise<Dentista> {
    try {
      await this.buscar(atualizarDentistaCommand.id);

      const dentista = await this.dentistaRepository.atualizar(
        atualizarDentistaCommand,
      );

      if (!dentista) {
        throw new BadRequestException('Ocorreu um erro ao atualizar dentista');
      }

      return dentista;
    } catch ({ message, status }) {
      throw new HttpException(message, status);
    }
  }
}
