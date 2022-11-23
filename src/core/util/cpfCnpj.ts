export class CpfCnpj {
  static limpar(cpfCnpj: string) {
    return cpfCnpj.replace(/\D/g, '');
  }
}