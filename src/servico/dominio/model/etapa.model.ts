import { ClienteEtapa } from './clienteEtapa.model';
import { Servico } from './servico.model';

export class Etapa {
  id: string;
  nome: string;
  valor: number;
  clinicaServicoId: string;
  clienteEtapa?: ClienteEtapa[];
  servico?: Servico;
}
