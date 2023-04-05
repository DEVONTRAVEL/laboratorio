import { Cliente } from 'src/cliente/dominio/model/cliente.model';

export class Clinica {
  id: string;
  nome: string;
  cpfCnpj: string;
  clienteId: string;
  cliente?: Cliente;
}
