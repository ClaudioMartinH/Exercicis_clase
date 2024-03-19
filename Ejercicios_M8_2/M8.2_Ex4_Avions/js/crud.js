omplirArrayAvions();

// function resetRadios() {
//   //radios html
//   let arrayRadios = document.querySelectorAll("input[name = 'opcion']:checked"); //sel.lecciona tot el que sigui un imput de nom opcion
//   console.log(arrayRadios);
//   arrayRadios.forEach((radio) => {
//     if (radio.checked === true) radio.checked = false;
//   });
// }
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
    index = avions.findIndex(
      (avions) => avions.numeroAvio === numeroAvio
    );
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
  let avioTrobat = {}; //declarem objecte buit per poder fer-lo servir despres
  let tipusAvio = "";

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
    avioTrobat = avions[indexAvioBuscar]; //fiquem l'index dins la variable per treballar més fàcil
    tipusAvio = avioTrobat.getClase(avioTrobat); //cridem al metode perque ens trobi el tipus
    console.log("index avio buscar", indexAvioBuscar);
    console.log("Avio trobat", avioTrobat);
    if (indexAvioBuscar < 0) {
      alert("L'avió introdueit no existeix");
    } else {
      switch (tipusAvio) {
        case "Avioneta":
          avioTrobat.mostrarAvioneta(avioTrobat);
          break;
        case "Avio comercial":
          avioTrobat.mostrarAvioComercial(avioTrobat);
          break;
        case "Jet privat":
          avioTrobat.mostrarJetPrivat(avioTrobat);
          break;
      }
      //resetRadios();

      // if ((avions[indexAvioBuscar]) instanceof Avioneta){
      //   missatgeMostrar = `
      //   ${avions[indexAvioBuscar]}
      //   -Temps de neteja: ${avions[indexAvioBuscar].netejar()} minuts de neteja.
      //   -Distancia que pot recòrrer: ${avions[indexAvioBuscar].calcularDistancia()} kms.
      //   `;
      //     return alert(missatgeMostrar);

      // } else if (avions[indexAvioBuscar] instanceof AvioComercial) {
      //   missatgeMostrar =
      //     avions[indexAvioBuscar] +
      //     "\nTemps de neteja: " +
      //     avions[indexAvioBuscar].netejar() +
      //     " minuts\n" +
      //     "Cost del menjar: " +
      //     avions[indexAvioBuscar].calcularCostMenjar(avions[indexAvioBuscar].numeroPassatgers);
      //   return alert(missatgeMostrar);

      // } else {
      //   missatgeMostrar = avions[indexAvioBuscar] + "\nTemps de neteja: " +
      //   avions[indexAvioBuscar].netejar() +
      //     "minuts de neteja\n";

      //   return alert(missatgeMostrar);

      // }
    }
  }
}
