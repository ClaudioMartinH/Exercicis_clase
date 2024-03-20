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
  repartirDinar(pacientsNou) {
    //preguntar pacientes
    // let pacientsNou = 0;
    
    if (pacientsNou !== this.pacients)
      alert(
        "El numero de pacients ha canviat, el nou numero de pacients és " +
          pacientsNou
      );
    return pacientsNou * 3;
  }
  netejar() {
    let netejaHospital = super.netejar();
    return netejaHospital + " €";
  }
  calcularCostVigilancia() {
    let costVigilarHospital = super.calcularCostVigilancia();
    return costVigilarHospital + " €";
  }

  toString(pacientsNou) {
    let missatge = super.toString();
    missatge += `
    PACIENTS            ${pacientsNou}`;
    return missatge;
  }
}
