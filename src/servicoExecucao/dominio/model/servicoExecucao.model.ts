import { ServicoExecucaoEtapa } from "./servicoExecucaoEtapa.model";

export class ServicoExecucao {
  id: string;
  dataHora: Date;
  descricao?: string;
  clinicaId : string;
  servicoId: string;
  dentistaId: string;
  clinicaServicoId: string;
  pacienteId?: string;
  servicoExecucaoEtapa?: ServicoExecucaoEtapa[];
}
