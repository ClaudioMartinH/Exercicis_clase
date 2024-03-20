class Hotel extends Edifici {
  static tipusEdifici = "HOTEL";
  constructor(nom, numPlantes, superficie, habitacions) {
    super(nom, numPlantes, superficie);
    this.habitacions = habitacions;
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
  setNom(nouNom) {
    this.nom = nouNom;
  }
  setNumPlantes(nouNumPlantes) {
    this.numPlantes = nouNumPlantes;
  }
  setSuperficie(novasuperficie) {
    this.superficie = novasuperficie;
  }
  setHabitacions(nouNumHabitacions) {
    this.habitacions = nouNumHabitacions;
  }
  netejar() {
    let netejaHotel = super.netejar();
    return netejaHotel + " €";
  }
  calcularCostVigilancia() {
    let costVigilarHotel = super.calcularCostVigilancia() + 500;
    return costVigilarHotel + " €";
  }
  calcularPersonalServei() {
    return Math.ceil(this.habitacions / 20) + " persones de servei.";
  }
  toString() {
    let missatge = super.toString();
    missatge += `
    HABITACIONS     ${this.habitacions}
  `;
    return missatge;
  }
}
