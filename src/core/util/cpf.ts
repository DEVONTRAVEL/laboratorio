export class cpf {
  static limpar(cpf: string) {
    return cpf.replace(/\D/g, '');
  }
}