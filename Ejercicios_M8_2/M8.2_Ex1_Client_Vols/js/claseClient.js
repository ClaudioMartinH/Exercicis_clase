

class Client {

  static tones = 0.5;

  constructor(dni, edat, nacionalitat, volsAgafats){
    this.dni = dni.toUpperCase();
    this.edat = edat;
    this.nacionalitat = nacionalitat.toUpperCase();
    this.volsAgafats = volsAgafats;
  }


getDni() {
  return this.dni
}
getEdat() {
  return this.edat
}
getNacionalitat() {
  return this.nacionalitat
}
getNumeroVols() {
  return this.volsAgafats
}
getPetjadaCarboni(){
  return this.volsAgafats * Client.tones + " Toneladas de CO2";
}

setDni(nuevoDni){
  this.dni = nuevoDni.toUpperCase();
}
setEdat(nuevaEdat){
  this.edat = nuevaEdat;
}
setNacionalitat(nuevaNacionalitat){
  this.nacionalitat = nuevaNacionalitat.toUpperCase();
}
setNumeroVols(nuevoNumeroVuelos){
  this.volsAgafats = nuevoNumeroVuelos;
}


toString(){
  let mensaje = `
  DATOS DEL CLIENTE:
  DNI             ${this.dni}
  EDAD            ${this.edat}
  NACIONALIDAD    ${this.nacionalitat}
  NUMERO VUELOS   ${this.volsAgafats}
  HUELLA CARBONO  ${this.getPetjadaCarboni()}
  `
  return mensaje;
}

}