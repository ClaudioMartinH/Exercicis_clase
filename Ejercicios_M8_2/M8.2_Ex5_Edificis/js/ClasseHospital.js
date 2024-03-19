class Hospital extends Edifici {
  static tipusEdifici = "HOSPITAL";
  constructor(nom, numPlantes, superficie, pacients) {
    super(nom, numPlantes, superficie);
    this.pacients = pacients;
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
  getHabitacions() {
    return this.habitacions;
  }
  getPacients() {
    return this.pacients;
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
  setNumeroPacients(nouNumeroPacients) {
    this.pacients = nouNumeroPacients;
  }
  repartirDinar() {
    return this.pacients * 3;
  }
  netejar() {
    let netejaHospital = super.netejar();
    return netejaHospital + " €";
  }
  calcularCostVigilancia() {
    let costVigilarHospital = super.calcularCostVigilancia();
    return costVigilarHospital + " €";
  }

  toString() {
    let missatge = super.toString();
    missatge += `
    COST NETEJA         ${this.netejar()}
    COST VIGILANCIA     ${this.calcularCostVigilancia()}
    AVUI HEM REPARTIT   ${this.repartirDinar()} DINARS
  `;
    return missatge;
  }

}