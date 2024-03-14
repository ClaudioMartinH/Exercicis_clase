function buscarImagen(nombreImagen) {
  let encontrado = false;
  let elementos = imagenes.length;
  let i = 0;
  let indice = -1;
  //console.log(nombreImagen);

  while (i < elementos && !encontrado) {
    if (imagenes[i].imagen == nombreImagen) {
      indice = i;
      encontrado = true;
    }
    i++;
  }
  return indice;
}

function agregarImagen() {
  let nombre = prompt("Indica el nombre de la foto que quieres agregar: ", "");
  let indice = buscarImagen(nombre);

  if (indice < 0) {
    let imagen = prompt("Indica el nombre del archivo con el .jpg", "vr...");
    let nombre = prompt("Indica el titulo de la foto", "Valentino ...");
    let title = prompt("Indica el nombre de la moto", "xxx ...");
    let descripcion = prompt("Indica la descripción de la foto", "Vale....");

    let imagen2 = new Imagen(imagen.toLowerCase(), nombre, title, descripcion);

    imagenes.push(imagen2);
    posicion = imagenes.length - 1;
    mostrarImagen();
  } else {
    alert("La imagen ya existe");
    posicion = indice;
    mostrarImagen();
  }
}

function eliminarImagen() {
  let mensaje = "¿Estas seguro que quieres eliminar la imagen?";
  let confirmar = confirm(mensaje);
  if (confirmar) {
    imagenes.splice(posicion, 1);
    avanza();
  }
}

function modificarImagen() {
  let nombre = prompt("¿Que imagen deseas modificar?");
  let indice = buscarImagen(nombre);
  console.log(nombre);
  console.log(indice);

  if (indice >= 0) {      
    let respuesta = +prompt( 
      //si posem + en lloc de Number o parseInt fa el mateix
      "¿Que deseas modificar de la imagen: 1 - nombre, 2 - title, 3 - descripcion?"
    );
    let imagenModificar = imagenes[indice];
    console.log(respuesta);
    switch (respuesta) {
      case 1:
        let nuevoNombre = prompt("¿Que nombre deseas ponerle a la foto?");
        imagenModificar.nombre = nuevoNombre;
        break;
      case 2:
        let nuevoTitle = prompt("Que titulo deseas ponerle a la foto?");
        imagenModificar.title = nuevoTitle;
        break;
      case 3:
        let nuevaDescripcion = prompt(
          "Que descripcion deseas ponerle a la foto?"
        );
        imagenModificar.descripcion = nuevaDescripcion;
        break;
    }
    posicion = indice;
    mostrarImagen();
  } else {
    alert("La foto no existe");
  }
}

function salir() {
  alert("Esto cerrará la pantalla");
  window.close();
}
