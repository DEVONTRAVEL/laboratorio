import { Dentista } from 'src/dentista/dominio/model/dentista.model';

export class Cliente {
  id: string;
  nome: string;
  cpf: number;
  dentista?: Dentista[];
}
