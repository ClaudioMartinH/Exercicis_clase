class Home extends Pacient {
  constructor(dni, nomComplet, edat, pes, estatura, cintura, maluc) {
    super(dni, nomComplet, edat, pes, estatura, cintura, maluc);
  }
  calcularIndexGreix() {
    let indexGreixH = super.calcularIndexGreix() - 5.4;
    return indexGreixH;
  }
  calcularRiscSalut(){
    let risc = "No hi ha risc";
    if (this.calcularRCC() > 0.95)
    risc = "Hi ha risc per la salut";
  else risc = "No hi ha risc";
  return risc;
  }
  toString(){
    let missatge = super.toString();
    missatge += `
    RISC SALUT        ${this.calcularRiscSalut()}
    `
    return missatge;
  }
}