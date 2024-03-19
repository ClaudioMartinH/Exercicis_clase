const edificis = [];

function crearHospital(nom, numPlantes, superficie, pacients) {
  let nouHospital = new Hospital(nom, numPlantes, superficie, pacients);
  return nouHospital;
}
function crearHotel(nom, numPlantes, superficie, habitacions) {
  let nouHotel = new Hotel(nom, numPlantes, superficie, habitacions);
  return nouHotel;
}
function crearCinema(nom, numPlantes, superficie) {
  let nouCinema = new Cinema(nom, numPlantes, superficie);
  return nouCinema;
}

function omplirArrayEdificis() {
  let novaHospital = crearHospital("VILAFRANCA", 2, 1950, 26);
  edificis.push(novaHospital);
  novaHospital = crearHospital("GENERAL", 10, 25350, 315);
  edificis.push(novaHospital);
  let nouHotel = crearHotel("HILTON", 22, 73858, 583);
  edificis.push(nouHotel);
  nouHotel = crearHotel("PEPITA", 3, 593, 12);
  edificis.push(nouHotel);
  let nouCinema = crearCinema("MONTECARLO", 1, 3180);
  edificis.push(nouCinema);
  nouCinema = crearCinema("PRINCIPAL", 2, 2450);
  edificis.push(nouCinema);

  console.log("Array omplert correctament");
  console.table(edificis);
}
