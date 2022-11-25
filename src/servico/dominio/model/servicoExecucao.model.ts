import { ServicoExecucaoEtapa } from './servicoExecucaoEtapa.model';

export class ServicoExecucao {
  id: string;
  servicoId: string;
  dentistaId: string;
  clienteServicoId: string;
  servicoExecucaoEtapa?: ServicoExecucaoEtapa[];
}
