import { ClienteEtapa } from './clienteEtapa.model';
import { ClinicaServico } from './clinicaServico.model';
import { Etapa } from './etapa.model';
import { ServicoExecucao } from './servicoExecucao.model';

export class Servico {
  id: string;
  nome: string;
  descricao: string;
  etapa?: Etapa[];
  clinicaServico?: ClinicaServico[];
  servicoExecucao?: ServicoExecucao[];
  clienteEtapa?: ClienteEtapa[];
}
