class Client {
  dni;
  nom;
  cognom;
  nacionalitat;
  edat;

  constructor(dni, nom, cognom, nacionalitat, edat) {
    this.dni = dni;
    this.nom = nom;
    this.cognom = cognom;
    this.nacionalitat = nacionalitat;
    this.edat = edat;
    this.volsClient = [];
  }
  esMajorEdat(edat) {
    let majorEdat = false;
    if (edat < 18) majorEdat == true;
    else majorEdat == false;
    return majorEdat;
  }

  getDni() {
    return this.dni;
  }
  getNom() {
    return this.nom;
  }
  getCognom() {
    return this.cognom;
  }
  getNacionalitat() {
    return this.nacionalitat;
  }
  getEdat() {
    return this.edat;
  }

  setDni(nuevoDni) {
    this.dni = nuevoDni.toUpperCase();
  }
  setNom(nuevoNom) {
    this.nom = nuevoNom.toUpperCase();
  }
  setCognom(nuevoCognom) {
    this.cognom = nuevoCognom.toUpperCase();
  }
  setNacionalitat(nuevaNacionalitat) {
    this.nacionalitat = nuevaNacionalitat.toUpperCase();
  }
  setEdat(nuevaEdat) {
    this.edat = nuevaEdat;
  }

  toString() {
    let mensaje = `
  DATOS DEL CLIENTE:
  NOM             ${this.nom}
  COGNOM          ${this.cognom}
  DNI             ${this.dni}
  EDAT            ${this.edat}
  NACIONALITAT    ${this.nacionalitat}
  VOLS            ${this.volsClient}
  `;
    return mensaje;
  }
}
