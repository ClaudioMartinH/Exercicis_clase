const clients = [
  new Client("12345678A", "JOAN", "LOPEZ", "ESPANYOLA", 35, []),
  new Client("98765432B", "PEP", "MAS", "FRANCES", 44, []),
  new Client("12345678Y", "ANTONIO", "MAS", "FRANCES", 14, []),
  new Client("88555432H", "FRANCESC", "MAS", "FRANCES", 4, []),
];

console.table(clients);
let text = document.getElementById("txt");

function agregarCliente() {
  let dniUsuari = "";
  let nomUsuariNou = "";
  let cognomUsuariNou = "";
  let nacionalitatUsuariNou = "";
  let edatUsuariNou = 0;
  //let escrit = document.getElementById("txt");

  dniUsuari = prompt("Introdueix el Dni del client: ").toUpperCase();
  let index = clients.findIndex((clients) => clients.dni === dniUsuari);
  if (index < 0) {
    nomUsuariNou = prompt(
      "introdueix el nom del client a crear: "
    ).toUpperCase();
    cognomUsuariNou = prompt(
      "Introdueix el cognom del nou client: "
    ).toUpperCase();
    nacionalitatUsuariNou = prompt(
      "Introdueix la nacionalitat del nou client"
    ).toUpperCase();
    edatUsuariNou = +prompt("Introdueix l'edat del nou client: ");

    let clientNou = new Client(
      dniUsuari,
      nomUsuariNou,
      cognomUsuariNou,
      nacionalitatUsuariNou,
      edatUsuariNou
    );

    clients.push(clientNou);
    //text.innerHTML = clientNou;
    alert(clientNou);
  } else alert("El client ja existeix");
  console.table(clients);
}

function eliminarCliente() {
  //aixo funciona cagundeu
  let dniUsuari = prompt("Introdueix el Dni del client: ");
  let index = clients.findIndex((client) => client.dni === dniUsuari);
  if (index >= 0) {
    clients.splice(index, 1);
    console.table(clients);
    alert("Client eliminat");
  } else alert("el client no es troba");
}

function crearVolCliente() {
  let dniUsuari = "";
  let index = -1;
  let nouNumeroVol = 0;
  let indexVol = -1;

  dniUsuari = prompt("Introdueix el Dni del client: ").toUpperCase();
  index = clients.findIndex((clients) => clients.dni === dniUsuari);
  if (index != -1) {
    nouNumeroVol = +prompt("Introdueix el numero de vol del client: ");
    indexVol = clients[index].volsClient.findIndex(
      (volsClient) => volsClient.numeroVol === nouNumeroVol
    );

    if (indexVol < 0) {
      nouDistanciaKms = +prompt("Introdueix la distància del nou vol en kms: ");
      nouCompanyia = prompt("Introdueix el nom de la companyia").toUpperCase();
      nouNumeroPassatgers = +prompt(
        "Introdueix el numero de passatgers del nou vol"
      );
      nouNombreMotors = +prompt("Introdueix el nombre de motors de l'avió: ");

      let volNou = new Vols(
        nouNumeroVol,
        nouDistanciaKms,
        nouCompanyia,
        nouNumeroPassatgers,
        nouNombreMotors
      );
      clients[index].volsClient.push(volNou);
      console.table(clients[index]);
      alert(clients[index]);
    } else alert("El vol ja existeix. ");
  } else alert("el client no existeix");
}
function mitjanaEdat() {
  let arrayMajorsEdat = clients.filter((client) => client.edat > 18); //array majors edat
  console.log("array majors edat", arrayMajorsEdat);
  let mitjanaEdats =
    arrayMajorsEdat.reduce((acc, prev) => acc + prev.edat, 0) /
    arrayMajorsEdat.length; //recorre l'array
  console.log("array mitjanaEdats", mitjanaEdats);
  alert(mitjanaEdats.toFixed(2));
}
function petjadaCarboniClient() {
  let dniUsuari = prompt("Introdueix el Dni del client: ").toUpperCase();
  let index = clients.findIndex((clients) => clients.dni === dniUsuari);
  console.log("index trobat ", index);
  let volUsuari = +prompt("Indica el numero de vol que vols consultar");
  let indexVol = clients[index].volsClient.findIndex(
    (volsClient) => volsClient.numeroVol === volUsuari
  );
  console.log("Vols trobat: ", indexVol);
  let petjada = clients[index].volsClient[indexVol].getPetjadaCarboni();
  return alert(petjada);
}
function petjadaCarboniMitjana() {
  let arrayVols = clients.filter((client) => client.volsClient);
  console.log("array de vols", arrayVols);
  let arrayMitjanaCarboni =
    arrayVols.reduce(
      (acc, prev) => acc + prev.volsClient,
      0
    );
    mitjanaCarboni = (arrayMitjanaCarboni.getPetjadaCarboni())/arrayMitjanaCarboni.length;
  return mitjanaCarboni;
}
