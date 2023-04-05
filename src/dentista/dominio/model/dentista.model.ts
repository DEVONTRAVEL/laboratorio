import { Cliente } from 'src/cliente/dominio/model/cliente.model';

export class Dentista {
  id: string;
  nome: string;
  cpfCnpj: string;
  clinicaId: string;
  clinica?: Cliente;
}
