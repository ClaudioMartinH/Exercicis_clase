const clients = [
  new Client("12345678A","JOAN", "LOPEZ", "ESPANYOLA", 35, []),
  new Client("98765432B", "PEP", "MAS", "FRANCES", 44, []),
];

console.table(clients);

function buscarVol(numeroVol) {
  let encontrado = false;
  let elementos = vols.length;
  let i = 0;
  let indice = -1;
  console.log("Numero de vol: ", numeroVol);

  while (i < elementos && !encontrado) {
    if (vols[i].numeroVol == numeroVol) {
      indice = i;
      encontrado = true;
    }
    i++;
  }
  console.log(indice);
  return indice;
}

function crearVol() {
  let numeroVol = +prompt("Introdueix el numero de vol: ");
  let indice = buscarVol(numeroVol);
  console.log("Numero de vol: ", numeroVol);

  if (indice < 0) {
    let distanciaVol = +prompt("Introdueixi la distància del vol en km: ", "0");
    let companyia = prompt(
      "Indiqui el nom de la companyia que opera el vol: ",
      "Iberia"
    );
    let numeroPassatgers = +prompt("Indica el nombre de passatgers: ", "0");
    let numeroMotors = +prompt(
      "Introdueixi el nombre de motors de l'avió: ",
      "0"
    );

    let vols2 = new Vols(
      numeroVol,
      distanciaVol,
      companyia,
      numeroPassatgers,
      numeroMotors
    );
    vols.push(vols2);
    console.table(vols);
    alert(vols2);
  } else {
    alert("El vol ja existeix");
  }
}

function donarDeBaixaVol() {
  let numeroVol = +prompt("Introdueix el numero de vol: ");
  let indice = buscarVol(numeroVol);
  console.log("Numero de vol: ", numeroVol);
  if (indice < 0) prompt("El vol que busca no existeix");
  else vols.splice(indice, 1);

  console.table(vols);
  alert("Vol eliminat");
}
function veureVol() {
  let numeroVol = +prompt("Introdueix el numero de vol: ");
  let indice = buscarVol(numeroVol);
  console.log("Numero de vol: ", numeroVol);
  if (indice < 0) prompt("El vol que busca no existeix");
  else alert(vols[indice]); //no hace falta poner toString porque ya lo llama al mostrar objeto
}

function modificarVol() {
  let numeroVol = +prompt("Introdueix el numero de vol: ");
  let indice = buscarVol(numeroVol);
  let nouNumeroVol = 0;
  let nouCompanyia = "";
  let nouDistanciaVol = 0;
  let nouNumeroPassatgers = 0;
  let nouNumeroMotors = 0;
  console.log("Numero de vol: ", numeroVol);
  console.log("Indice :", indice);
  if (indice < 0) alert("El vol no s'ha trobat");
  else {
    nouNumeroVol = +prompt("Introdueix el nou numero de vol");
    vols[indice].setNumeroVol(nouNumeroVol);
    nouCompanyia = prompt("Introdueix el nom de la companyia");
    vols[indice].setCompanyia(nouCompanyia);
    nouDistanciaVol = +prompt("Introdueix la nova distància de vol");
    vols[indice].setDistanciaVol(nouDistanciaVol);
    nouNumeroPassatgers = +prompt("Introdueix el nou nombre de passatgers");
    vols[indice].setNumeroPassatgers(nouNumeroPassatgers);
    nouNumeroMotors = +prompt("Introdueix el nou numero de motors");
    vols[indice].setNumeroMotors(nouNumeroMotors);

    alert(vols[indice]);
    //document.getElementById("txt").innerHTML = vols[indice].toString();
    console.table(vols);
  }
}
