//omplirArray();

function agregarCliente() {
  let dniUsuari = "";
  let nomUsuariNou = "";
  let cognomUsuariNou = "";
  let nacionalitatUsuariNou = "";
  let edatUsuariNou = 0;
  let index = -1;

  dniUsuari = prompt("Introdueix el Dni del client: ").toUpperCase();
  index = clients.findIndex((clients) => clients.dni === dniUsuari);
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
    alert(clientNou);
  } else alert("El client ja existeix");
  console.table(clients);
}

function eliminarCliente() {
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
  let nouCompanyia = "";
  let nouDistanciaKms = 0;
  let nouNombreMotors = 0;
  let nouNumeroPassatgers = 0;

  dniUsuari = prompt("Introdueix el Dni del client: ").toUpperCase();
  indexClient = clients.findIndex((clients) => clients.dni === dniUsuari);
  if (indexClient != -1) {
    nouNumeroVol = +prompt("Introdueix el numero de vol del client: ");
    indexVol = clients[indexClient].volsClient.findIndex(
      (volsClient) => volsClient.numeroVol === nouNumeroVol
    );

    if (indexVol < 0) {
      nouDistanciaKms = +prompt("Introdueix la distància del nou vol en kms: ");
      nouCompanyia = prompt("Introdueix el nom de la companyia").toUpperCase();
      nouNumeroPassatgers = +prompt(
        "Introdueix el numero de passatgers del nou vol"
      );
      nouNombreMotors = +prompt("Introdueix el nombre de motors de l'avió: ");

      let volNou = new Vol(
        nouNumeroVol,
        nouDistanciaKms,
        nouCompanyia,
        nouNumeroPassatgers,
        nouNombreMotors
      );
      clients[indexClient].afegirVol(volNou); //clients[index].volsClient.push(volNou);
      console.table(clients[indexClient]);
      alert(clients[indexClient]);
    } else alert("El vol ja existeix. ");
  } else alert("El client no existeix");
}

function mitjanaEdat() {
  const arrayMajorsEdat = clients.filter((client) => client.edat > 18); //array majors edat pq li passem la condició > 18
  console.log("array majors edat", arrayMajorsEdat);
  let mitjanaEdats =
    arrayMajorsEdat.reduce((acc, prev) => acc + prev.edat, 0) /
    arrayMajorsEdat.length; //recorre l'array
  console.log("array mitjanaEdats", mitjanaEdats);
  alert(Math.round(mitjanaEdats * 100) / 100); //multiplicar per 1 + tants zeros com decimals
  console.log(typeof Math.round(mitjanaEdats));
}
function petjadaCarboniClient() {
  let dniUsuari = prompt("Introdueix el Dni del client: ").toUpperCase();
  let index = clients.findIndex((clients) => clients.dni === dniUsuari);
  console.log("index trobat ", index);
  if (index != -1) {
    let volUsuari = +prompt("Indica el numero de vol que vols consultar");
    let indexVol = clients[index].volsClient.findIndex(
      (volsClient) => volsClient.numeroVol === volUsuari
    );
    console.log("Vols trobat: ", indexVol);
    let petjada = clients[index].volsClient[indexVol].getPetjadaCarboni();
    return alert(petjada);
  } else alert("No s'ha trobat el client");
}
function petjadaCarboniMitjana() {
  let petjadaTotal = 0;
  let mitjaPetjada = 0;
  clients.forEach((client) => {
    petjadaTotal += client.petjadaCarboniClient();
  });
  if (clients.length === 0) alert("No hay datos para calcular");
  else {
    mitjaPetjada = +(petjadaTotal / clients.length).toFixed(4);
    console.log("mitja petjada", mitjaPetjada);
    alert(
      `La media de la huella de carbono de los clientes es:  ${mitjaPetjada} toneladas de CO2`
    );
  }
}
