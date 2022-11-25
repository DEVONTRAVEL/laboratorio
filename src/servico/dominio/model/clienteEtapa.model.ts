import { ServicoExecucaoEtapa } from './servicoExecucaoEtapa.model';

export class ClienteEtapa {
  id: string;
  clienteId: string;
  servicoId: string;
  etapaId: string;
  servicoExecucaoEtapa?: ServicoExecucaoEtapa[];
}
