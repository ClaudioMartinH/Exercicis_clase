class AvioComercial extends Avio {
  numeroPassatgers;
  constructor(numeroAvio, marca, model, carregaKg, llarg, numeroPassatgers) {
    super(numeroAvio, marca, model, carregaKg, llarg);
    this.numeroPassatgers = numeroPassatgers;
  }
  getClase(obj) {
    if (obj instanceof AvioComercial) {
      return "Avio comercial";
    }
  }

  netejar() {
    let netejaAvioComercial = super.netejar() + 240;
    return netejaAvioComercial;
  }

  calcularCostMenjar(numeroPassatgers) {
    let preuMenjar = numeroPassatgers * 10;
    return preuMenjar + " €";
  }
  mostrarAvioComercial(avioTrobat) {
    let missatgeMostrar = ` ${avioTrobat}
  -Temps de neteja:  ${avioTrobat.netejar()} minuts
  -Cost del menjar: ${avioTrobat.calcularCostMenjar(
     avioTrobat.numeroPassatgers
   )}`;
    return alert(missatgeMostrar);
  }
  toString() {
    let missatge = super.toString();
    missatge += `
  -Numero de passatgers: ${this.numeroPassatgers} `;
    return missatge;
  }
}
