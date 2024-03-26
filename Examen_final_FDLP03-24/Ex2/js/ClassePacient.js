class Pacient {
  constructor(dni, nomComplet, edat, pes, estatura, cintura, maluc){
    this.dni = dni;
    this.nomComplet = nomComplet;
    this.edat = edat;
    this.pes = pes;
    this.estatura = estatura;
    this.cintura = cintura;
    this.maluc = maluc;

  }
  calcularImc(){
    let estaturaQuadrat = Math.pow(this.estatura, 2);
    console.log( "estatura al quadrat", estaturaQuadrat);
    let imc = (this.pes / estaturaQuadrat);
    console.log("IMC ", imc.toFixed(4));
    return imc;
  }
  calcularIndexGreix(){
    let indexGreix = ((1.2 * this.calcularImc()) + (0.23 * this.edat));
    console.log("Index greix ", indexGreix.toFixed(4));
    return indexGreix; 
  }
  calcularRCC(){
    let relacio = this.cintura / this.maluc;
    console.log("RCC ", relacio.toFixed(4));
    return relacio;
  }
  categoriaPes(){
    let calcul = this.calcularImc();
    let pes = "";
    if (calcul < 18.5){
      pes = "Pes insuficient";
    } else if (calcul > 18.5 && calcul < 24.9){
      pes = "Pes normal";
    } else if (calcul > 25 && calcul < 29.9 ){
      pes = "Sobrepes";
    } else {
      pes = "Obesitat"
    }
    console.log("Categoria pes ", pes);
    return pes;
  }

  toString(){
    let missatge = `
    DADES DEL PACIENT
    -----------------
    DNI             ${this.dni}
    NOM             ${this.nomComplet}
    EDAT            ${this.edat}
    PES             ${this.pes}
    ESTATURA        ${this.estatura}
    CINTURA         ${this.cintura}
    MALUC           ${this.maluc}
    IMC             ${this.calcularImc().toFixed(4)}
    INDEX GREIX     ${this.calcularIndexGreix().toFixed(4)}
    RCC             ${this.calcularRCC().toFixed(4)}
    CATEGORIA PES   ${this.categoriaPes()}
    `;
    return missatge;
  }

}
