import { Cliente } from 'src/cliente/dominio/model/cliente.model';

export class Dentista {
  id: string;
  nome: string;
  clienteId: string;
  cliente?: Cliente;
}
