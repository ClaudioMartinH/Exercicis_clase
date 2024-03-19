class Avio {
  numeroAvio;
  marca;
  model;
  carregaKg;
  llarg;
  constructor(numeroAvio, marca, model, carregaKg, llarg) {
    this.numeroAvio = numeroAvio;
    this.marca = marca;
    this.model = model;
    this.carregaKg = carregaKg;
    this.llarg = llarg;
  }
  netejar() {
    return this.llarg * 10;
  }
  combustibleNecessari() {
    return this.carregaKg * this.llarg;
  }
  toString() {
    let missatge = `
  -Numero d'avió: ${this.numeroAvio}
  -Marca avió: ${this.marca}
  -Model avió: ${this.model}
  -Combustible necessari: ${this.combustibleNecessari()} litres per vol`;
    return missatge;
  }
}
