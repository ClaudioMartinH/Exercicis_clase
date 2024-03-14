console.table(clients);

function buscarCliente(dni) {
  let encontrado = false;
  let elementos = clients.length;
  let i = 0;
  let indice = -1;
  console.log("dni introducido: ", dni);

  while (i < elementos && !encontrado) {
    if (clients[i].dni == dni) {
      indice = i;
      encontrado = true;
    }
    i++;
  }
  console.log(indice);
  return indice;
}
function agregarCliente() {
  let dni = prompt("Intoroduce el DNI del cliente: ").toUpperCase();
  let indice = buscarCliente(dni);
  console.log("indice de busqueda: ", indice);

  if (indice < 0) {
    let edat = +prompt("Introduce la edad del cliente: ", "0");
    let nacionalitat = prompt(
      "Indica la nacionalidad del nuevo cliente: ",
      "Pais"
    );
    let volsAgafats = +prompt(
      "Indique el numero de vuelos realizados por el nuevo cliente: ",
      "0"
    );

    let client2 = new Client(dni, edat, nacionalitat, volsAgafats);
    clients.push(client2);
    console.table(clients);
    alert(client2);

  } else {
    alert("El cliente ya existe");
  }
}

function modificarDatos() {
  let dni = prompt("Introduzca el Dni del cliente que desea modificar:").toUpperCase();
  let indice = buscarCliente(dni);
  let nuevoDni = "";
  let nuevaEdad = 0;
  let nuevaNacionalidad = "";
  let nuevoVuelos = 0;

  if (indice < 0) {
    alert("Cliente no encontrado");
  } else {
    nuevoDni = prompt("introduce el nuevo Dni del cliente").toUpperCase();
    clients[indice].setDni(nuevoDni);
    nuevaEdad = +prompt("Introduce la nueva edad del cliente");
    clients[indice].setEdat(nuevaEdad);
    nuevaNacionalidad = prompt("Introduce la nueva nacionalidad del cliente").toUpperCase();
    clients[indice].setNacionalitat(nuevaNacionalidad);
    nuevoVuelos = +prompt("Introduce el nuevo numero de vuelos del cliente");
    clients[indice].setNumeroVols(nuevoVuelos);
    console.table(clients);
    alert(clients[indice]);
  }
}

function eliminarCliente() {
  let dniBuscar = prompt("Introduce el Dni del cliente que quieres eliminar: ").toUpperCase();
  let indice = buscarCliente(dniBuscar);
  if (indice < 0) prompt("El cliente que busca no existe");
  else clients.splice(indice, 1);
  console.table(clients);
  alert("Cliente eliminado");
}

function salir() {
  alert("¿Seguro que deseas salir?");
  window.close();
}

function consultarDatos() {
  let dni = prompt("Introduzca el Dni del cliente que desea consultar:").toUpperCase();
  let indice = buscarCliente(dni);
  if (indice < 0) alert("El cliente no se ha encontrado");
  else{
    alert(clients[indice]);
  }
}
