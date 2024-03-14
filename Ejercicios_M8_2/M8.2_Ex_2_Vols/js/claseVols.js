class Vols {

  static tones = 0.1;

  constructor(
    numeroVol,
    distanciaVol,
    companyia,
    numeroPassatgers,
    numeroMotors
  ) {
    this.numeroVol = numeroVol;
    this.distanciaVol = distanciaVol;
    this.companyia = companyia;
    this.numeroPassatgers = numeroPassatgers;
    this.numeroMotors = numeroMotors;
  }

  getPetjadaCarboni() {
    let missatge =
      "El vol " +
      this.numeroVol +
      " contamina " +
      ((this.distanciaVol / 1000) * (this.numeroMotors * Vols.tones)).toFixed(2) +     //0.1 tones als 1000km son 1 tona als 10000km
      " Tones de CO2";
    return missatge;
  }
  getNumeroVol() {
    return this.numeroVol;
  }
  getDistanciaVol() {
    return this.distanciaVol;
  }
  getCompanyia() {
    return this.companyia;
  }
  getNumeroPassatgers() {
    return this.numeroPassatgers;
  }
  getNumeroMotors() {
    return this.numeroMotors;
  }
  setNumeroVol(nouNumeroVol) {
    this.numeroVol = nouNumeroVol;
  }
  setDistanciaVol(nouDistanciaVol) {
    this.distanciaVol = nouDistanciaVol;
  }
  setCompanyia(nouCompanyia) {
    this.companyia = nouCompanyia;
  }
  setNumeroPassatgers(nouNumeroPassatgers) {
    this.numeroPassatgers = nouNumeroPassatgers;
  }
  setNumeroMotors(nouNumeroMotors) {
    this.numeroMotors = nouNumeroMotors;
  }
  toString() {
    let mensaje = `
  DADES DEL VOL
  --------------------------------
  NUMERO DE VOL         ${this.numeroVol}
  DISTÀNCIA DEL VOL     ${this.distanciaVol} KMS.
  COMPANYIA             ${this.companyia}
  NUMERO DE PASSATGERS  ${this.numeroPassatgers}
  NUMERO DE MOTORS      ${this.numeroMotors}
  PETJADA DE CARBONI    ${this.getPetjadaCarboni()}

  `;
    return mensaje;
  }
}
