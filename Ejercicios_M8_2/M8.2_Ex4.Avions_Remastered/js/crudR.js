omplirArrayAvions();

function altaAvio() {
  let index = -1;
  let numeroAvio = 0;
  let marca = "";
  let model = 0;
  let carregaKg = 0;
  let llarg = 0;
  let helix = 0;
  let avioCrear = +prompt(
    "Quin tipus d'avió vols crear?\n 1. Avioneta\n 2. Avió Comercial\n 3. JetPrivat\n Introdueix el numero corresponent"
  );
  if (
    avioCrear === null ||
    avioCrear === undefined ||
    isNaN(avioCrear) ||
    avioCrear == ""
  ) {
    alert("Si us plau sel.lecciona una opció vàlida");
  } else {
    numeroAvio = +prompt("Introdueixi el numero d'avió a crear: ");
    index = avions.findIndex((avions) => avions.numeroAvio === numeroAvio);
    console.log("index ", index);
    switch (avioCrear) {
      case 1:
        if (index < 0) {
          marca = prompt(
            "Introdueix la marca de l'avió",
            "CESSNA"
          ).toUpperCase();
          model = +prompt("Introdueix el model de l'avió", "1003");
          carregaKg = +prompt("Introdueix la càrrega de l'avio en kgs", "3000");
          llarg = +prompt("Introdueix la llargària de l'avió", "18");
          helix = +prompt("Introdueix el numero d'helix de l'avió", "2");
          novaAvioneta = crearAvioneta(
            numeroAvio,
            marca,
            model,
            carregaKg,
            llarg,
            helix
          );
          avions.push(novaAvioneta);
          console.table(avions);
          alert(avions[avions.length - 1]);
        } else alert("L'avió ja existeix");
        break;
      case 2:
        if (index < 0) {
          marcaAvio = prompt(
            "Introdueix la marca de l'avió",
            "BOEING"
          ).toUpperCase();
          modelAvio = +prompt("Introdueix el model de l'avió", "2003");
          carregaKgAvio = +prompt(
            "Introdueix la càrrega de l'avio en kgs",
            "10000"
          );
          llargAvio = +prompt("Introdueix la llargària de l'avió", "180");
          numPassAvio = +prompt("Introdueix el numero de passatgers", "250");
          nouAvioComercial = crearAvioComercial(
            numeroAvio,
            marcaAvio,
            modelAvio,
            carregaKgAvio,
            llargAvio,
            numPassAvio
          );
          avions.push(nouAvioComercial);
          console.table(avions);
          alert(avions[avions.length - 1]);
        }
        break;
      case 3:
        if (index < 0) {
          marca = prompt(
            "Introdueix la marca de l'avió",
            "BOMBARDIER"
          ).toUpperCase();
          model = +prompt("Introdueix el model de l'avió", "3003");
          carregaKg = +prompt("Introdueix la càrrega de l'avio en kgs", "5000");
          llarg = +prompt("Introdueix la llargària de l'avió", "18");
          numPass = +prompt("Introdueix el numero de passatgers", "10");
          nouPrivat = crearJetPrivat(
            numeroAvio,
            marca,
            model,
            carregaKg,
            llarg,
            numPass
          );
          avions.push(nouPrivat);
          console.table(avions);
          alert(avions[avions.length - 1]);
          break;
        }
    }
  }
}
function eliminaAvio() {
  let numeroAvio;
  let indexAvioEliminar = -1;

  numeroAvio = +prompt("Introdueix el numero de l'avió a cercar:");
  console.log(numeroAvio);
  if (
    numeroAvio === null ||
    numeroAvio === undefined ||
    isNaN(numeroAvio) ||
    numeroAvio === 0 ||
    numeroAvio === ""
  ) {
    //no debemos inicializar antes de un prompt, problemon encontrado
    alert("Si us plau introdueix un numero d'avio vàlid");
  } else {
    indexAvioEliminar = avions.findIndex(
      (avions) => avions.numeroAvio === numeroAvio
    );
    avions.splice(indexAvioEliminar, 1);
    console.table(avions);
    alert("Avió eliminat");
  }
}
function mostrarAvio() {
  let numAvioBuscar = 0;
  let indexAvioBuscar = -1;
  let avioTrobat = {};

  numAvioBuscar = +prompt(
    "Introdueix el numero de l'avió que vols que mostri "
  );
  if (
    numAvioBuscar === null ||
    numAvioBuscar === undefined ||
    isNaN(numAvioBuscar) ||
    numAvioBuscar === ""
  ) {
    alert("Si us plau introduceix un numero d'avió vàlid");
  } else {
    indexAvioBuscar = avions.findIndex(
      (avions) => avions.numeroAvio === numAvioBuscar
    );
    avioTrobat = avions[indexAvioBuscar];
    console.log("Avio trobat", avioTrobat);
    if (avioTrobat instanceof Avioneta) {
      missatgeMostrar = `
      ${avioTrobat}
  -Temps de neteja: ${avioTrobat.netejar()} minuts de neteja.
  -Distancia que pot recòrrer: ${avioTrobat.calcularDistancia()} kms.
      `;
      return alert(missatgeMostrar);
    } else if (avioTrobat instanceof AvioComercial) {
      let passatgers = +prompt(
        "Introdueix el numero de passatgers (Màxim 800))"
      );
      if (passatgers > 800)
        +prompt(
          "El número de passatgers es superior a la capacitat. Introdueix el numero de passatgers vàlid (Màxim 800))"
        );
      missatgeMostrar = `${avioTrobat}
  -Cost del menjar: ${avioTrobat.calcularCostMenjar(passatgers)}`;
      return alert(missatgeMostrar);
    } else {
      missatgeMostrar = `
            ${avioTrobat}
  -Temps de neteja: ${avioTrobat.netejar()} minuts.
  
            `;
      return alert(missatgeMostrar);
    }
  }
}
//
//tipusAvio = avioTrobat.getClase(avioTrobat); //cridem al metode perque ens trobi el tipus
//console.log("index avio buscar", indexAvioBuscar);

// if (indexAvioBuscar < 0) {
//   alert("L'avió introdueit no existeix");
// } else {
//   switch (tipusAvio) {
//     case "Avioneta":
//       avioTrobat.mostrarAvioneta(avioTrobat);
//       alert("Tipus d'avió: Avioneta");
//       break;
//     case "Avio comercial":
//       avioTrobat.mostrarAvioComercial(avioTrobat);
//       alert("Tipus d'avió: Avió comercial");
//       break;
//     case "Jet privat":
//       avioTrobat.mostrarJetPrivat(avioTrobat);
//       alert("Tipus d'avió: Jet privat");
//       break;
//   }
