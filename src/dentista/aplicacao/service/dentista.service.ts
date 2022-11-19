import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AtualizarDentistaCommand } from 'src/dentista/dominio/command/atualizarDentista.command';
import { CriarDentistaCommand } from 'src/dentista/dominio/command/criarDentista.command';
import { Dentista } from 'src/dentista/dominio/model/dentista.model';
import { DentistaRepository } from 'src/dentista/infra/repository/mongoDb/dentista.repository';

@Injectable()
export class DentistaService {
  constructor(private dentistaRepository: DentistaRepository) {}

  async listar(): Promise<Dentista[]> {
    const resultado = await this.dentistaRepository.listar();

    if (!resultado) {
      throw new NotFoundException('Nenhum dentista encontrado');
    }

    return resultado;
  }

  async criar(criarDentistaCommand: CriarDentistaCommand): Promise<Dentista> {
    const dentista = await this.dentistaRepository.criar(criarDentistaCommand);

    if (!dentista) {
      throw new BadRequestException('Ocorreu um erro ao cadastrar dentista');
    }

    return dentista;
  }

  async buscar(id: string): Promise<Dentista> {
    const resultado = await this.dentistaRepository.buscar(id);

    if (!resultado) {
      throw new NotFoundException('Dentista não encontrado');
    }

    return resultado;
  }

  async atualizar(
    atualizarDentistaCommand: AtualizarDentistaCommand,
  ): Promise<Dentista> {
    const dentista = await this.dentistaRepository.atualizar(
      atualizarDentistaCommand,
    );

    if (!dentista) {
      throw new BadRequestException('Ocorreu um erro ao atualizar dentista');
    }

    return dentista;
  }
}
