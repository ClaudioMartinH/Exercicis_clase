class Cinema extends Edifici {
  static tipusEdifici = "CINEMA";
  constructor(nom, numPlantes, superficie) {
    super(nom, numPlantes, superficie);
  }
  getNom() {
    return this.nom;
  }
  getnumPlantes() {
    return this.numPlantes;
  }
  getSuperficie() {
    return this.superficie;
  }
  setNom(nouNom) {
    this.nom = nouNom;
  }
  setNumPlantes(nouNumPlantes) {
    this.numPlantes = nouNumPlantes;
  }
  setSuperficie(novasuperficie) {
    this.superficie = novasuperficie;
  }
  netejar() {
    let netejaCinema = super.netejar();
    return netejaCinema + " €";
  }
  calcularCostVigilancia() {
    let vigilantsCinema = Math.ceil(this.superficie / 3000);
    console.log("vigilants cinema" ,vigilantsCinema);
    let costVigilarCinema = vigilantsCinema * 1300;
    return costVigilarCinema + " €";
  }
  projectarSessio(numAssistents, preu) {
    return numAssistents * preu + " €";
  }
  toString() {
    let preu = 0;
    let numAssistents = +prompt(
      "Introdueix el numero d'espectadors de la sessió (Màxim 150)"
    );
    if (
      numAssistents <= 0 ||
      numAssistents === null ||
      numAssistents === undefined ||
      isNaN(numAssistents) ||
      numAssistents === ""
    )
      +prompt("Introdueix un numero vàlid d'espectadors (Màxim 150)");
    else {
      preu = +prompt("Introdueix el preu de la sessió en € sense el simbol");
      if (
        preu <= 0 ||
        preu === null ||
        preu === undefined ||
        isNaN(preu) ||
        preu === ""
      )
        +prompt("Introdueix un preu vàlid");
    }

    let missatge = super.toString();
    missatge += `
      COST NETEJA         ${this.netejar()}
      COST VIGILANCIA     ${this.calcularCostVigilancia()}
      INGRESSOS SESSIÓ    ${this.projectarSessio(numAssistents, preu)}
      `;
    return missatge;
  }
}
