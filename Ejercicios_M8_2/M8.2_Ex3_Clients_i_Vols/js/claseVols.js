class Vols {
  static tones = 0.1;

  numeroVol;
  distanciaKms;
  companyia;
  numPassatgers;
  nombreMotors;

  constructor(numeroVol, distanciaKms, companyia, numPassatgers, nombreMotors) {
    this.numeroVol = numeroVol;
    this.distanciaKms = distanciaKms;
    this.companyia = companyia;
    this.numPassatgers = numPassatgers;
    this.nombreMotors = nombreMotors;
  }

  getNumeroVol() {
    return this.numeroVol;
  }
  getDistanciaKms() {
    return this.distanciaKms;
  }
  getCompanyia() {
    return this.companyia;
  }
  getNumPassatgers() {
    return this.numPassatgers;
  }
  getNombreMotors() {
    return this.nombreMotors;
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
  setNombreMotors(nouNombreMotors) {
    this.numeroMotors = nouNombreMotors;
  }
  getPetjadaCarboni() {
    // let missatge =
    //   "El vol " +
    //   this.numeroVol +
    //   " contamina " +
    //   (+(this.distanciaKms / 1000) * (this.nombreMotors * Vols.tones)) /
    //     this.numPassatgers.toFixed(2) +
    //   " Tones de CO2 per passatger.";
    let huellaPers = (+(this.distanciaKms / 1000) * (this.nombreMotors * Vols.tones)) /
        this.numPassatgers.toFixed(2)
    return huellaPers;
  }
  toString() {
    let mensaje = `
    DADES DEL VOL
    --------------------------------
    NUMERO DE VOL         ${this.numeroVol}
    DISTÀNCIA DEL VOL     ${this.distanciaKms} KMS.
    COMPANYIA             ${this.companyia}
    NUMERO DE PASSATGERS  ${this.numPassatgers}
    NUMERO DE MOTORS      ${this.nombreMotors}
  PETJADA DE CARBONI    ${this.getPetjadaCarboni()}

  `;
    return mensaje;
  }
}
