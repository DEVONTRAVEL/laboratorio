import { ServicoExecucao } from './servicoExecucao.model';

export class ClienteServico {
  id: string;
  clienteId: string;
  servicoId: string;
  valor: number;
  servicoExecucao?: ServicoExecucao[];
}
