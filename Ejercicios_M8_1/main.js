const personas = [
  {
    nombre: "Juan",
    dni: "12345678",
    hobbies: ["leer", "bailar"],
  },
  {
    nombre: "María",
    dni: "87654321",
    hobbies: ["pintar", "correr", "viajar"],
  },
  {
    nombre: "Pedro",
    dni: "98765432",
    hobbies: ["cocinar", "ver películas"],
  },
  {
    nombre: "Laura",
    dni: "54321678",
    hobbies: ["hacer deporte", "viajar"],
  },
  {
    nombre: "Carlos",
    dni: "87651234",
    hobbies: ["tocar la guitarra", "hacer deporte"],
  },
];
let texto = document.getElementById("txt");

function buscarPersonaDni() {
  let mensaje = "";
  let dniBuscar = +prompt(
    "Introduzca el numero del DNI que está buscando (sin la letra)"
  );
  const encontrarDni = personas.find((persona) => persona.dni == dniBuscar);
  console.log("dni encontrado", encontrarDni);
  if (encontrarDni) {
    mensaje =
      "El DNI " +
      dniBuscar +
      " pertenece a " +
      encontrarDni.nombre +
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
  indice = personas.findIndex((persona) => persona.dni == dniBuscar);
  console.log("indice: ", indice);
  if (indice == -1) {
    alert("El DNI no se encuentra en la base de datos");
  } else {
    mensaje = "El DNI " + dniBuscar + " se encuentra en la posición: " + indice;
    texto.innerHTML = mensaje;
  }
}
function personesHobbies() {
  let mensaje = "";

  let paraulaUsuari = prompt("Introduce el hobbie que quieres buscar :");
  const personasFiltradas = personas.filter((persona) =>
    persona.hobbies.includes(paraulaUsuari)
  );
  if (personasFiltradas.length > 0) {
    personasFiltradas.forEach((persona) => (mensaje += persona.nombre + " "));
  } else mensaje = "No se encontraron personas con el hobbie introducido";

  console.log(mensaje);
  texto.innerHTML = mensaje;
}

function totsElsHobbies() {
  let mensaje = personas.reduce((allHobbies, persona) => {
    return Array.from(new Set([...allHobbies, ...persona.hobbies]));
  }, []);
  console.log(mensaje);
  texto.innerHTML =
    "Los hobbies de las personas registradas (sin repetirse) son: " +
    mensaje.join(", ");
}

function tensHobbies() {
  let mensaje = "";
  let hobbieBuscar = prompt("Introduce el hobbie que quieres buscar: ");
  let personaAmbHobbie = personas.some((persona) =>
    persona.hobbies.includes(hobbieBuscar)
  );
  if (personaAmbHobbie == true) {
    mensaje = "Hemos encontrado el hobbie";
  } else mensaje = "No se ha encontrado el hobbie";
  texto.innerHTML = mensaje;
}
function personaHobbie() {
  let mensaje = "";
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
  nomsMajuscules = personas.map((persona) => persona.nombre);
  mensaje = nomsMajuscules.join(", ");
  texto.innerHTML = mensaje.toUpperCase();
}
