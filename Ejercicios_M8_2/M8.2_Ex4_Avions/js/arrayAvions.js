const avions = [];

function crearAvioneta(numeroAvio, marca, model, carregaKg, llarg, helix) {
  let novaAvioneta = new Avioneta(
    numeroAvio,
    marca,
    model,
    carregaKg,
    llarg,
    helix
  );
  return novaAvioneta;
}
function crearAvioComercial(
  numeroAvio,
  marca,
  model,
  carregaKg,
  llarg,
  numeroPassatgers
) {
  let nouAvioComercial = new AvioComercial(
    numeroAvio,
    marca,
    model,
    carregaKg,
    llarg,
    numeroPassatgers
  );
  return nouAvioComercial;
}
function crearJetPrivat(
  numeroAvio,
  marca,
  model,
  carregaKg,
  llarg,
  numeroPassatgers
) {
  let nouJetPrivat = new JetPrivat(
    numeroAvio,
    marca,
    model,
    carregaKg,
    llarg,
    numeroPassatgers
  );
  return nouJetPrivat;
}


function omplirArrayAvions() {
  let novaAvioneta = crearAvioneta(1000, "CESSNA", 205, 2000, 10, 1)
  avions.push(novaAvioneta);
  novaAvioneta = crearAvioneta(1001, "CESSNA", 206, 3500, 15, 2)
  avions.push(novaAvioneta);
  let nouAvioComercial = crearAvioComercial(2000, "BOEING", 747, 10000, 250, 225)
  avions.push(nouAvioComercial);
  nouAvioComercial = crearAvioComercial(2001, "AIRBUS", 370, 9000, 175, 200)
  avions.push(nouAvioComercial);
  let nouJetPrivat = crearJetPrivat(3000, "BOMBARDIER", 111, 4000, 25, 8)
  avions.push(nouJetPrivat)
  nouJetPrivat = crearJetPrivat(3001, "BOMBARDIER", 211, 4500, 29, 10)
  avions.push(nouJetPrivat)
  

  console.log("Array omplert correctament");
  console.table(avions);
}
