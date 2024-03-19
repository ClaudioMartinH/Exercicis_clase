class JetPrivat extends Avio {
  constructor(numeroAvio, marca, model, carregaKg, llarg) {
    super(numeroAvio, marca, model, carregaKg, llarg);
    
  }
  netejar() {
    let netejaJetPrivat = super.netejar() / 2 + 15;
    return netejaJetPrivat;
  }
  calcularCostReserva(numeroPassatgers) {
    let preuReserva = numeroPassatgers * 1000;
    return preuReserva + " €";
  }
  
  toString() {
    let passatgers = +prompt("Introdueix el numero de passatgers (Màxim 10)");
    if (passatgers > 10)
      +prompt("Introdueix el numero de passatgers (Màxim 10)");
    let missatge = super.toString();
    missatge += `
  -Tipus d'avió: Jet privat  
  -Cost de la reserva: ${this.calcularCostReserva(passatgers)}`;
    return missatge;
  }
}

// getClase(obj) {
//   if (obj instanceof JetPrivat) {
//     return "Jet privat";
//   }
// }

// mostrarJetPrivat(avioTrobat) {
//   let missatgeMostrar = `${avioTrobat}
// -Temps de neteja: ${avioTrobat.netejar()} Minuts de neteja`;
//   return alert(missatgeMostrar);
// }
