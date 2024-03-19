class Avioneta extends Avio {
  helix;
  constructor(numeroAvio, marca, model, carregaKg, llarg, helix) {
    super(numeroAvio, marca, model, carregaKg, llarg);
    this.helix = helix;
  }

  netejar() {
    let netejaAvioneta = super.netejar() / 2;
    return netejaAvioneta;
  }
  calcularDistancia() {
    return this.helix * 1000;
  }
  toString() {
    let missatge = super.toString();
    missatge += `
  -Tipus d'avió: Avioneta  
  -Numero hèlix: ${this.helix}`;
    return missatge;
  }
}

// -Temps de neteja: ${this.netejar()} minuts de neteja.
// -Distancia que pot recòrrer: ${this.calcularDistancia()} kms.
// getClase(obj) {
  //   if (obj instanceof Avioneta) {
//     return "Avioneta";
//   }
// }


// mostrarAvioneta(avioTrobat) {
//   let missatgeMostrar = `${avioTrobat}
// -Temps de neteja: ${avioTrobat.netejar()} minuts de neteja.
// -Distancia que pot recòrrer: ${avioTrobat.calcularDistancia()} kms.
//        `;
//   return alert(missatgeMostrar);
// }