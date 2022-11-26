import { ClienteEtapa } from './clienteEtapa.model';
import { Servico } from './servico.model';

export class Etapa {
  id: string;
  nome: string;
  valor: number;
  servicoId: string;
  clienteEtapa?: ClienteEtapa[];
  servico?: Servico;
}
