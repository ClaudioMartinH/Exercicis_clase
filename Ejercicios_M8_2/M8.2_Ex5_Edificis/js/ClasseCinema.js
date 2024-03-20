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
    
    let missatge = super.toString();
    return missatge;
  }
}
