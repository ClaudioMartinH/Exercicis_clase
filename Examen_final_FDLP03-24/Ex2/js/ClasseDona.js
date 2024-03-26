class Dona extends Pacient {
  constructor(
    dni,
    nomComplet,
    edat,
    pes,
    estatura,
    cintura,
    maluc,
    embarassos
  ) {
    super(dni, nomComplet, edat, pes, estatura, cintura, maluc);
    this.embarassos = embarassos;
  }
  calcularRiscSalut() {
    let risc = "No hi ha risc";
    if (this.calcularRCC() >= 0.82) risc = "Hi ha risc per la salut";
    else risc = "No hi ha risc";
    return risc; //se borró el return
  }
  toString() {
    let missatge = super.toString();
    missatge += `
    EMBARASSOS        ${this.embarassos}
    RISC SALUT        ${this.calcularRiscSalut()}
    `;
    return missatge;
  }
}
