const clients = [];

function crearClient(dni, nom, cognom, nacionalitat, edat) {
  let nouClient = new Client(dni, nom, cognom, nacionalitat, edat);
  return nouClient;
}

function crearVol(
  numeroVol,
  distanciaKms,
  companyia,
  numPassatgers,
  nombreMotors
) {
  let nouVol = new Vol(
    numeroVol,
    distanciaKms,
    companyia,
    numPassatgers,
    nombreMotors
  );
  return nouVol;
}

function omplirArray() {
  let nouClientArray = crearClient(
    "12345678A",
    "JOAN",
    "LOPEZ",
    "ESPANYOLA",
    35
  );
  clients.push(nouClientArray);
  nouClientArray = crearClient("98765432B", "PEP", "MAS", "FRANCES", 44);
  clients.push(nouClientArray);
  nouClientArray = crearClient("12345678Y", "ANTONIO", "MAS", "FRANCES", 14);
  clients.push(nouClientArray);
  nouClientArray = crearClient("88555432H", "FRANCESC", "MAS", "FRANCES", 4);
  clients.push(nouClientArray);

  let vol1 = crearVol(1000, 4275, "KLM", 125, 4);
  let vol2 = crearVol(1001, 9875, "VUELING", 135, 4);
  let vol3 = crearVol(1002, 6850, "IBERIA", 130, 4);
  let vol4 = crearVol(1003, 7475, "ETIHAD", 195, 4);

  clients[0].afegirVol(vol1);
  clients[0].afegirVol(vol4);
  clients[1].afegirVol(vol2);
  clients[2].afegirVol(vol3);
  clients[3].afegirVol(vol2);
  console.log("Array omplert correctament");
  console.table(clients);
}
