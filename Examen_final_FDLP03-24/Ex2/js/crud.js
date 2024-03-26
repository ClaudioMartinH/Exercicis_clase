omplirArrayPacients();

function buscarPacient(dniUsuari) {
  let encontrado = false;
  let elements = pacients.length;
  let i = 0;
  let indice = -1;
  console.log("Dni introduit usuari: ", dniUsuari);

  while (i < elements && !encontrado) {
    if (pacients[i].dni == dniUsuari) {
      indice = i;
      encontrado = true;
    }
    i++;
  }
  console.log("Dni pacient", indice);
  return indice;
}

function main() {
  let seleccion = +prompt(
    "SEL.LECCIONA L'OPCIÓ DESITJADA\n" +
      "1. Mostrar dades del pacient\n" +
      "2. Mostrar IMC i categoria pes pacient\n" +
      "3. Mostrar index greix pacient\n" +
      "4. Relació cintura maluc pacient\n" +
      "5. Sortir"
  );

  console.log("Seleccion", seleccion);
  while (seleccion <= 0 || seleccion > 5) {
    seleccion = +prompt(
      "Valor introduit erroni\n" +
        "SEL.LECCIONA L'OPCIÓ DESITJADA\n" +
        "1. Mostrar dades del pacient\n" +
        "2. Mostrar IMC i categoria pes pacient\n" +
        "3. Mostrar index greix pacient\n" +
        "4. Relació cintura maluc pacient\n" +
        "5. Sortir"
    );
  }

  let dniBuscar = 0;
  let indexPacientBuscar = 0;
  let pacientTrobat = 0;
  switch (seleccion) {
    case 1:
      do dniBuscar = +prompt("Introdueix el dni del pacient");
      while (
        dniBuscar === null ||
        dniBuscar === undefined ||
        isNaN(dniBuscar) ||
        dniBuscar === ""
      );
      indexPacientBuscar = buscarPacient(dniBuscar);
      pacientTrobat = pacients[indexPacientBuscar];
      alert(pacientTrobat);

      break;
    case 2:
      let dniBuscar2 = 0;
      do dniBuscar2 = +prompt("Introdueix el dni del pacient");
      while (
        dniBuscar2 === null ||
        dniBuscar2 === undefined ||
        isNaN(dniBuscar2) ||
        dniBuscar2 === ""
      );
      indexPacientBuscar = buscarPacient(dniBuscar2);
      pacientTrobat = pacients[indexPacientBuscar];
      alert(`
      IMC             ${pacientTrobat.calcularImc().toFixed(4)}
      CATEGORIA PES   ${pacientTrobat.categoriaPes()}
      `);
      main();
      break;
    case 3:
      let dniBuscar3 = 0;
      do dniBuscar3 = +prompt("Introdueix el dni del pacient");
      while (
        dniBuscar3 === null ||
        dniBuscar3 === undefined ||
        isNaN(dniBuscar3) ||
        dniBuscar3 === ""
      );
      indexPacientBuscar = buscarPacient(dniBuscar3);
      pacientTrobat = pacients[indexPacientBuscar];
      alert(`
      INDEX GREIX PACIENT   ${pacientTrobat.calcularIndexGreix().toFixed(4)}
        `);
      main();
      break;
    case 4:
      let dniBuscar4 = 0;
      do dniBuscar4 = +prompt("Introdueix el dni del pacient");
      while (
        dniBuscar4 === null ||
        dniBuscar4 === undefined ||
        isNaN(dniBuscar4) ||
        dniBuscar4 === ""
      );
      indexPacientBuscar = buscarPacient(dniBuscar4);
      pacientTrobat = pacients[indexPacientBuscar];
      alert(`
      RELACIÓ CINTURA MALUC   ${pacientTrobat.calcularRCC().toFixed(4)}
        `);
      main();
      break;
    case 5:
      alert("Es tancarà la finestra");
      window.close();
      break;
  }
}
