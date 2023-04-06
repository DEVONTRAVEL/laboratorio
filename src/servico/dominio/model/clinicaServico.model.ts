import { Clinica } from 'src/clinica/dominio/model/clinica.model';
import { ServicoExecucao } from './servicoExecucao.model';
import { Servico } from './servico.model';

export class ClinicaServico {
  id: string;
  clinicaId: string;
  servicoId: string;
  valor: number;
  exclusao?: boolean;
  servicoExecucao?: ServicoExecucao[];
  clinica?: Clinica;
  servico?: Servico;
}
