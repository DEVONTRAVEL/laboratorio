import { ClienteEtapa } from './clienteEtapa.model';
import { ClienteServico } from './clienteServico.model';
import { Etapa } from './etapa.model';
import { ServicoExecucao } from './servicoExecucao.model';

export class Servico {
  id: string;
  nome: string;
  etapa?: Etapa[];
  clienteServico?: ClienteServico[];
  servicoExecucao?: ServicoExecucao[];
  clienteEtapa?: ClienteEtapa[];
}
