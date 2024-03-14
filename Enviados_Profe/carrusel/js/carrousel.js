let posicion = 0;
mostrarImagen();

function avanza() {
  posicion++;
  if (posicion >= imagenes.length) {
    //alert("Es la última imagen");
    posicion = 0;
  }
  mostrarImagen();
}
function retrocede() {
  posicion--;
  if (posicion < 0) {
    //alert("Es la primera imagen");
    posicion = imagenes.length - 1;
  }
  mostrarImagen();
}
function mostrarImagen() {
  let objecteMoto = imagenes[posicion];
  let imagenMoto = RUTA + objecteMoto.imagen;
  console.log(imagenMoto);
  let imagenTitle = imagenes[posicion].title;
  console.log(imagenTitle);
  let imagenNombre = imagenes[posicion].nombre;
  console.log(imagenNombre);
  let imagenDescripcion = imagenes[posicion].descripcion;
  console.log(imagenDescripcion);
  document.getElementById("imagen").src = imagenMoto;
  document.getElementById("imagen").title = imagenTitle;
  document.getElementById("imagen").alt = imagenDescripcion;
  //document.getElementById("nombreImagen").innerHTML = imagenTitle + " - " + imagenNombre;
  document.getElementById("nombreImagen").innerHTML = `${imagenTitle}  -  ${imagenNombre}`;
  document.getElementById("descripcionImagen").innerHTML = imagenDescripcion;
}
