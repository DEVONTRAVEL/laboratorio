import { ClienteEtapa } from './clienteEtapa.model';

export class Etapa {
  id: string;
  nome: string;
  valor: number;
  servicoId: string;
  clienteEtapa?: ClienteEtapa[];
}
