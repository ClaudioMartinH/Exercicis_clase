let texto = document.getElementById("txt");

function buscarPersonaDni() {
  let mensaje = "";
  let dniBuscar = +prompt(
    "Introduzca el numero del DNI que está buscando (sin la letra)"
  );
  while (
    dniBuscar === null ||
    dniBuscar === undefined ||
    isNaN(dniBuscar) ||
    dniBuscar <= 0
  ) {
    dniBuscar = +prompt(
      "Introduzca el numero del DNI que está buscando (sin la letra)"
    );
  }
  const personaDniOk = personas.find((persona) => persona.dni == dniBuscar);
  console.log("dni encontrado", personaDniOk);
  if (personaDniOk) {
    mensaje =
      "El DNI " +
      dniBuscar +
      " pertenece a " +
      personaDniOk.nombre +
      " y se encuentra dado de alta en la aplicación";
  } else {
    mensaje =
      "El " + dniBuscar + " no se encuentra dado de alta en la aplicacion";
  }
  texto.innerHTML = mensaje;
}

function buscarPosicioPersona() {
  let mensaje = "";
  let indice = -1;
  let dniBuscar = +prompt(
    "Introduzca el numero del DNI que está buscando (sin la letra)"
  );
  while (
    dniBuscar === null ||
    dniBuscar === undefined ||
    isNaN(dniBuscar) ||
    dniBuscar <= 0
  ) {
    dniBuscar = +prompt(
      "Introduzca el numero del DNI que está buscando (sin la letra)"
    );
  }
  indice = personas.findIndex((persona) => persona.dni == dniBuscar);
  console.log("indice: ", indice);
  if (indice == -1) {
    alert("El DNI no se encuentra en la base de datos");
  } else {
    mensaje = "El DNI " + dniBuscar + " pertenece a " + personas[indice].nombre + " y se encuentra en la posición: " + indice;
    texto.innerHTML = mensaje;
  }
}
function personesHobbies() {
  let mensaje = "";

  let paraulaUsuari = prompt("Introduce el hobbie que quieres buscar :");
  const personasFiltradas = personas.filter((persona) =>
    persona.hobbies.includes(paraulaUsuari)
  );
  if (personasFiltradas) {
    //personasFiltradas.length > 0
    personasFiltradas.forEach((persona) => (mensaje += persona.nombre + " "));
  } else mensaje = "No se encontraron personas con el hobbie introducido";

  console.log(mensaje);
  texto.innerHTML = mensaje;
}

function totsElsHobbies() {
  // let mensajeArray = personas.reduce((allHobbies, persona) => {
  //   return Array.from(new Set([...allHobbies, ...persona.hobbies]));
  // }, []);
  let mensajeArray = [];
  personas.forEach((persona) => {
    for (hobbie of persona.hobbies) {
      if (!mensajeArray.includes(hobbie)) {
        //s'ha de negar que hi sigui per poder comprovar-ho
        mensajeArray.push(hobbie);
      }
    }
  });
  console.log(mensajeArray);
  texto.innerHTML =
    "Los hobbies de las personas registradas (sin repetirse) son: " +
    mensajeArray.join(", ");
}

function tensHobbies() {
  let mensaje = "";
  let hobbieBuscar = prompt("Introduce el hobbie que quieres buscar: ");
  let personaAmbHobbie = personas.some((persona) =>
    persona.hobbies.includes(hobbieBuscar)
  );
  if (personaAmbHobbie === true) {
    mensaje = "Hemos encontrado el hobbie";
  } else mensaje = "No se ha encontrado el hobbie";
  texto.innerHTML = mensaje;
}
function personaHobbie() {
  let mensaje = ""; //amb el find troba la primera persona que el tingui, i amb un filter em donarà un array amb tots esl que tinguin aquell hobbie
  let hobbieIntroduit = prompt("Introduce el hobbie a buscar: ");
  const personaElegida = personas.find((persona) =>
    persona.hobbies.includes(hobbieIntroduit)
  );
  if (personaElegida) {
    mensaje =
      "La primera persona que tiene ese hobbie es: " + personaElegida.nombre;
  } else mensaje = "No se ha encontrado la persona";
  texto.innerHTML = mensaje;
}
function arrayNomsMajuscules() {
  let nomsMajuscules = [];
  let mensaje = "";
  nomsMajuscules = personas.map((persona) => persona.nombre.toUpperCase());
  mensaje = nomsMajuscules.join(", ");
  texto.innerHTML = mensaje;
}

function verificar() {
  let seleccion = document.getElementById("opt").value;
  switch (seleccion) {
    case "1":
      buscarPersonaDni();
      break;
    case "2":
      buscarPosicioPersona();
      break;
    case "3":
      personesHobbies();
      break;
    case "4":
      totsElsHobbies();
      break;
    case "5":
      tensHobbies();
      break;
    case "6":
      personaHobbie();
      break;
    case "7":
      arrayNomsMajuscules();
      break;
  }
}
