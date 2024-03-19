class AvioComercial extends Avio {
  constructor(numeroAvio, marca, model, carregaKg, llarg) {
    super(numeroAvio, marca, model, carregaKg, llarg);
  }

  netejar() {
    let netejaAvioComercial = super.netejar() + 240;
    return netejaAvioComercial;
  }

  calcularCostMenjar(numeroPassatgers) {
    let preuMenjar = numeroPassatgers * 10;
    console.log("Cost del menjar", preuMenjar, typeof(preuMenjar));
    return preuMenjar + "€";
  }
  toString() {
    
    let missatge = super.toString();
    missatge += `
  -Tipus avió: Avió comercial  
  -Temps de neteja:  ${this.netejar()} minuts`;
    return missatge;
  }
}

// getClase(obj) {
//   if (obj instanceof AvioComercial) {
//     return "Avio comercial";
//   }
// }

// mostrarAvioComercial(avioTrobat) {
//   let passatgers = +prompt("Introdueix el numero de passatgers)");
//   if (passatgers > 800)
//     +prompt(
//       "El número de passatgers es superior a la capacitat. Introdueix el numero de passatgers vàlid)"
//     );
//   let missatgeMostrar = ` ${avioTrobat}
// -Temps de neteja:  ${avioTrobat.netejar()} minuts
// -Cost del menjar: ${avioTrobat.calcularCostMenjar(passatgers)}`;
//   return alert(missatgeMostrar);
// }
