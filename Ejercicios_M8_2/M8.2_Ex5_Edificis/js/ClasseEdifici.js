class Edifici {
  constructor(nom, numPlantes, superficie) {
    this.nom = nom;
    this.numPlantes = numPlantes;
    this.superficie = superficie;
  }

  netejar() {
    let temps = this.superficie / 5;
    let netejaPlantes = 0;
    let costMensual = 0;
    if (this.numPlantes > 1) {
      netejaPlantes = this.numPlantes * 0.5;
    }
    costMensual = (temps + netejaPlantes) * 30;
    return costMensual;
  }
  calcularCostVigilancia() {
    let vigilantsNecessaris = Math.ceil(this.superficie / 1000);
    console.log(vigilantsNecessaris);
    let costMensual = vigilantsNecessaris * 1300;
    return costMensual;
  }
  toString() {
    let mensaje = `
    DADES DE L'EDIFICI
    --------------------------------
    NOM                 ${this.nom}
    NUMERO DE PLANTES   ${this.numPlantes}
    SUPERFICIE          ${this.superficie} m2.`;
    return mensaje;
  }
}
