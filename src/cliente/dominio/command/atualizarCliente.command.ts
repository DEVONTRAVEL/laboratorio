import { IsCpfUnique } from '../decorator/IsCpfUnique.decorator';

export class DataAtualizarClienteCommand {
  nome: string;
  @IsCpfUnique({ message: 'CPF já cadastrado' })
  cpf: number;
}

export class AtualizarClienteCommand {
  id: string;
  data: DataAtualizarClienteCommand;
}
