const pacients = [];

function crearPacientHome(
  dni,
  nomComplet,
  edat,
  pes,
  estatura,
  cintura,
  maluc
) {
  let nouPacientHome = new Home(
    dni,
    nomComplet,
    edat,
    pes,
    estatura,
    cintura,
    maluc
  );
  return nouPacientHome;
}
function crearPacientDona(
  dni,
  nomComplet,
  edat,
  pes,
  estatura,
  cintura,
  maluc,
  embarassos
) {
  let nouPacientDona = new Dona(
    dni,
    nomComplet,
    edat,
    pes,
    estatura,
    cintura,
    maluc,
    embarassos
  );
  return nouPacientDona;
}

function omplirArrayPacients() {
  let nouPacientHome = crearPacientHome(12345678,"Claudio Martin", 38, 100, 185, 96, 90);
  pacients.push(nouPacientHome);
  nouPacientHome = crearPacientHome(
    87654321,
    "Alberto Fernandez",
    19,
    75,
    175,
    76,
    70
  );
  pacients.push(nouPacientHome);
  let nouPacientDona = crearPacientDona(11223344, "Ana Fernandez", 25, 63, 160, 60, 90, 0);
  pacients.push(nouPacientDona);
  nouPacientDona = crearPacientDona(11111111, "Maria Magdalena", 50, 66, 170, 66, 95, 2);
  pacients.push(nouPacientDona);
  nouPacientDona = crearPacientDona(22222222, "Victoria Final", 38, 66, 180, 60, 90, 1);
  pacients.push(nouPacientDona);
  

  console.log("Array omplert correctament");
  console.table(pacients);
}
