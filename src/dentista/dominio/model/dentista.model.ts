import { Cliente } from 'src/cliente/dominio/model/cliente.model';
import { Clinica } from 'src/clinica/dominio/model/clinica.model';

export class Dentista {
  id: string;
  nome: string;
  cpfCnpj: string;
  clinicaId: string;
  clinica?: Clinica;
}
