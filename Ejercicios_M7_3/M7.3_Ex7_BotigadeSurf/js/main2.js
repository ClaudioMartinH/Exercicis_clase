function main() {
  let seleccion = +prompt(
    "SELECCIONA LA OPCIÓN DESEADA\n" +
      "1. Calcular material de la tabla\n" +
      "2. Imprimir forecast\n" +
      "3. Calcular coste por reserva\n" +
      "4. Salir"
  );
  
  console.log("Seleccion", seleccion);
  while (seleccion <= 0 || seleccion >= 5) {
    seleccion = +prompt(
      "Valor introducido erroneo\n" +
      "SELECCIONA LA OPCIÓN DESEADA\n" +
        "1. Calcular material de la tabla\n" +
        "2. Imprimir forecast\n" +
        "3. Calcular coste por reserva\n" +
        "4. Salir"
    );
  }
  switch (seleccion) {
    case 1:
      calcularMaterial();
      break;
    case 2:
      forecast();
      break;
    case 3:
      reservar();
      break;
    case 4:
      salir();
      break;
  }
}

function calcularMaterial() {
  let experiencia = confirm(
    "¿Tienes experiencia haciendo surf?\n Si-> Aceptar\n No-> Cancelar"
  );
  console.log("Experiencia", experiencia, typeof experiencia);
  alert(
    experiencia
      ? "Puedes alquilar Tabla de fibra"
      : "Deberás alquilar Tabla de espuma"
  );
  reservar();
}

  

function forecast() {
  //let alturaOlas = null;
   let alturaOlas = +prompt("¿Qué altura tienen las olas hoy en metros?");
  while (alturaOlas === null || isNaN(alturaOlas) || alturaOlas < 0)
    //alturaOlas = +prompt("¿Qué altura tienen las olas hoy en metros?");
  alert("Por favor, introduce una altura de las olas en metros");

  alert(alturaOlas > 2 ? "¡Cuidado! Hoy tenemos olas grandes, si sabes surfear, lo pasarás bien."
      : "Hoy tenemos olas pequeñas, ideal para principiantes"
  );

  main();
}

function reservar() {
  let tiempoReserva = 0;
  //let tablaSurf = 0; //aixo fa que obviem el primer prompt
  let tablaSurf = +prompt(
    "¿Qué tipo de tabla quieres reservar?\n 1-> Fibra\n 2-> Espuma"
  );

  console.log("tablaSurf", tablaSurf);
  while (tablaSurf !== 1 && tablaSurf !== 2) {
    tablaSurf = +prompt(
      "El valor introducido no es correcto\n" +
      "¿Qué tipo de tabla quieres reservar?\n 1-> Fibra\n 2-> Espuma"
    );
    console.log("tablaSurf", tablaSurf);
  }

  tiempoReserva =
    +prompt("Indicanos cuánto tiempo en minutos quieres reservar: ") / 60;
  console.log("Tiempo Reserva", tiempoReserva);
  // tablaSurf === 1     //canviat if per ternari cridant les 2 funcions
  //   ? calcularPrecio(tiempoReserva, 1)
  //   : calcularPrecio(tiempoReserva, 2);
  alert(calcularPrecio(tiempoReserva, tablaSurf === 1 ? 1 : 2)); //aixo canvia el ternari de sobre, es equivalent
  main();
}

function salir() {
  confirm("¿Seguro que quieres salir?") ? window.close() : main();

// const salir = () =>
//   confirm("¿Seguro que quieres salir?") ? window.close() : main();

//(preguntaSalir) ? window.close() : main();

// if (preguntaSalir === true) {
//   window.close();
// } else {
//   main();
// }
}

// function calcularPrecio(tiempo, tipoTabla) {
//  return ("El precio de su reserva es: \n" + (tiempo * (tipoTabla === 1) ? 35 : 25 ).toFixed(2) + " €") ;
// }
const calcularPrecio = (tiempo, tipoTabla) =>
  "El precio de su reserva es: \n" +
  (tiempo * (tipoTabla === 1 ? 35 : 25)).toFixed(2) +
  " €";

// const calcularPrecio = (tiempo, tipoTabla) => {
//   console.log("tiempo", tiempo, "tabla", tipoTabla);
//   return (
//     "El precio de su reserva es: \n" +
//     (tiempo * (tipoTabla === 1 ? 35 : 25)).toFixed(2) +
//     " €"
//   );
// };
function calcularPrecio(tiempo, tipoTabla){
let precioReserva = 0;

if (tipoTabla === 1) {
  precioReserva = tiempo * 35;
} else {
  precioReserva = tiempo * 25;
}
 return (
  "El precio de su reserva es: \n" + precioReserva.toFixed(2) + "€"
);
}