class JetPrivat extends Avio {
  numeroPassatgers;
  constructor(numeroAvio, marca, model, carregaKg, llarg, numeroPassatgers) {
    super(numeroAvio, marca, model, carregaKg, llarg);
    this.numeroPassatgers = numeroPassatgers;
  }
  getClase(obj){
    if (obj instanceof JetPrivat){
      return "Jet privat";
    }
  }
  netejar() {
    let netejaJetPrivat = super.netejar()/2 + 15;
    return netejaJetPrivat;
  }
  calcularCostReserva(numeroPassatgers){
    let preuReserva = numeroPassatgers * 1000;
    return preuReserva + " €";
  }
  mostrarJetPrivat(avioTrobat){
   let missatgeMostrar = `${avioTrobat}
  -Temps de neteja: ${avioTrobat.netejar()} Minuts de neteja`;
    return alert(missatgeMostrar);
  }
  toString() {
    let missatge = super.toString();
    missatge += `
  -Numero de passatgers: ${this.numeroPassatgers} 
  -Cost de la reserva: ${this.calcularCostReserva(this.numeroPassatgers)}`;
    return missatge;
  }
}