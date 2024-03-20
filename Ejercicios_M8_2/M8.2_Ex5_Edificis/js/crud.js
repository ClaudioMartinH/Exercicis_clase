omplirArrayEdificis();

function buscarEdifici(nomEdifici) {
  let encontrado = false;
  let elements = edificis.length;
  let i = 0;
  let indice = -1;
  console.log("Nom de l'edifici: ", nomEdifici);

  while (i < elements && !encontrado) {
    if (edificis[i].nom == nomEdifici) {
      indice = i;
      encontrado = true;
    }
    i++;
  }
  console.log("index edifici", indice);
  return indice;
}

function altaEdifici() {
  let nomBuscar = prompt(
    "Introdueix el nom de l'edifici que vols buscar"
  ).toUpperCase();
  let indexEdificiBuscar = buscarEdifici(nomBuscar);
  console.log("index cerca", indexEdificiBuscar);
  if (indexEdificiBuscar >= 0) alert("L'edifici introduit ja existeix");
  else {
    let edificiCrear = +prompt(
      "Indica el tipus d'edifici que vols crear\n1.Hospital\n2.Hotel\n3.Cinema "
    );
    if (edificiCrear !== 1 && edificiCrear !== 2 && edificiCrear !== 3)
      +prompt(
        "Numero no valid, indica el tipus d'edifici que vols crear\n1.Hospital\n2.Hotel\n3.Cinema "
      );
    else {
      let superficieNova = 0;
      let numPlantesNou = 0;
      switch (edificiCrear) {
        case 1:
          superficieNova = +prompt("Indica la superficie en m2");
          numPlantesNou = +prompt("Indica el numero de plantes");
          let pacientsNou = +prompt("Indica el numero de pacients");
          nouHospital = crearHospital(
            nomBuscar,
            numPlantesNou,
            superficieNova,
            pacientsNou
          );
          edificis.push(nouHospital);
          console.table(edificis);
          alert(edificis[edificis.length - 1]);
          break;
        case 2:
          superficieNova = +prompt("Indica la superficie en m2");
          numPlantesNou = +prompt("Indica el numero de plantes");
          let habitacionsNou = +prompt("Indica el numero d'habitacions'");
          nouHotel = crearHotel(
            nomBuscar,
            numPlantesNou,
            superficieNova,
            habitacionsNou
          );
          edificis.push(nouHotel);
          console.table(edificis);
          alert(edificis[edificis.length - 1]);
          break;
        case 3:
          superficieNova = +prompt("Indica la superficie en m2");
          numPlantesNou = +prompt("Indica el numero de plantes");
          nouCinema = crearCinema(nomBuscar, numPlantesNou, superficieNova);
          edificis.push(nouCinema);
          console.table(edificis);
          alert(edificis[edificis.length - 1]);
          break;
      }
    }
  }
}
function mostrarEdifici() {
  let missatge = "";
  let nomBuscar = prompt(
    "Introdueix el nom de l'edifici que vols buscar"
  ).toUpperCase();
  let indexEdificiBuscar = buscarEdifici(nomBuscar);
  let edificiTrobat = edificis[indexEdificiBuscar];
  console.log("index cerca", indexEdificiBuscar);
  if (indexEdificiBuscar < 0) alert("L'edifici introduit no existeix");
  else {
    if (edificiTrobat instanceof Hospital) {
      do
        pacientsNou = +prompt(
          "Introdueix el numero de pacients",
          edificiTrobat.pacients
        );
      while (
        pacientsNou <= 0 ||
        pacientsNou === null ||
        pacientsNou === undefined ||
        isNaN(pacientsNou) ||
        pacientsNou === ""
      );
      missatge += `
    ${edificiTrobat.toString(pacientsNou)}
    TIPUS EDIFICI       HOSPITAL
    AVUI HEM REPARTIT   ${edificiTrobat.repartirDinar(pacientsNou)} DINARS
    COST NETEJA         ${edificiTrobat.netejar()}
    COST VIGILANCIA     ${edificiTrobat.calcularCostVigilancia()}
  `;
      alert(missatge);
    } else if (edificiTrobat instanceof Hotel) {
      missatge += `
    ${edificiTrobat}
    TIPUS EDIFICI       HOTEL
    COST NETEJA         ${edificiTrobat.netejar()}
    COST VIGILANCIA     ${edificiTrobat.calcularCostVigilancia()}
    PERSONAL SERVEI     ${edificiTrobat.calcularPersonalServei()}
  `;
      alert(missatge);
    } else {
      let preu = 0;
      let numAssistents = +prompt(
        "Introdueix el numero d'espectadors de la sessió (Màxim 150)"
      );
      if (
        numAssistents <= 0 ||
        numAssistents === null ||
        numAssistents === undefined ||
        isNaN(numAssistents) ||
        numAssistents === ""
      )
        +prompt("Introdueix un numero vàlid d'espectadors (Màxim 150)");
      else {
        preu = +prompt("Introdueix el preu de la sessió en € sense el simbol");
        if (
          preu <= 0 ||
          preu === null ||
          preu === undefined ||
          isNaN(preu) ||
          preu === ""
        )
          +prompt("Introdueix un preu vàlid");
      }

      missatge += `
      ${edificiTrobat}
    TIPUS EDIFICI       CINEMA
    COST NETEJA         ${edificiTrobat.netejar()}
    COST VIGILANCIA     ${edificiTrobat.calcularCostVigilancia()}
    INGRESSOS SESSIÓ    ${edificiTrobat.projectarSessio(numAssistents, preu)}
    `;
      alert(missatge);
    }
  }
}
function eliminarEdifici() {
  let nomEdifici = prompt(
    "Introdueix el nom de l'edifici que vols eliminar"
  ).toUpperCase();
  let indice = buscarEdifici(nomEdifici);
  console.log("Nom EdifinomEdifici: ", nomEdifici);
  if (indice < 0) prompt("L'edifici que ens indica no existeix");
  else edificis.splice(indice, 1);
  console.table(edificis);
}

// let numAssistents = +prompt(
//       "Introdueix el numero d'espectadors de la sessió (Màxim 150)"
//     );
//     if (
//       numAssistents <= 0 ||
//       numAssistents === null ||
//       numAssistents === undefined ||
//       isNaN(numAssistents) ||
//       numAssistents === ""
//     )
//       +prompt("Introdueix un numero vàlid d'espectadors (Màxim 150)");
//     else {
//       let preu = +prompt(
//         "Introdueix el preu de la sessió en € sense el simbol"
//       );
//       if (
//         preu <= 0 ||
//         preu === null ||
//         preu === undefined ||
//         isNaN(preu) ||
//         preu === ""
//       )
//         +prompt("Introdueix un preu vàlid");
//       else {
//        let preuSessio = preu * preu;
//       }
//       return preuSessio.toFixed(2) + " €";
