class Avioneta extends Avio {
  helix;
  constructor(numeroAvio, marca, model, carregaKg, llarg, helix) {
    super(numeroAvio, marca, model, carregaKg, llarg);
    this.helix = helix;
  }
  getClase(obj) {
    if (obj instanceof Avioneta) {
      return "Avioneta";
    }
  }
  netejar() {
    let netejaAvioneta = super.netejar() / 2;
    return netejaAvioneta;
  }
  calcularDistancia() {
    return this.helix * 1000;
  }
  mostrarAvioneta(avioTrobat) {
    let missatgeMostrar = `${avioTrobat}
  -Temps de neteja: ${avioTrobat.netejar()} minuts de neteja.
  -Distancia que pot recòrrer: ${avioTrobat.calcularDistancia()} kms.
         `;
    return alert(missatgeMostrar);
  }
  toString() {
    let missatge = super.toString();
    missatge += `
  -Numero hèlix: ${this.helix}`;
    return missatge;
  }
}
