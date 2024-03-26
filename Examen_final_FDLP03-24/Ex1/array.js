function arrayNumeroAleatoris(numUsuari) {
  let arrayNumeros = [];
  for (let i = 0; i < numUsuari; i++) {
    arrayNumeros.push(Math.floor(Math.random() * 60));
  }
  console.table(arrayNumeros);
  return arrayNumeros;
}

function comprovem() {
  let arrayNumerosGenerada = [];
  let numeroPetit = 0;
  let numeroMitja = 0;
  let numeroGran = 0;
  let percentatgePetit = 0;
  let percentatgeMitja = 0;
  let percentatgeGran = 0;
  let numerosArray = 0;
  let numero = 0;
  let i = 0;
  let numUsuari = parseInt(document.getElementById("numUsuari").value);
  console.log("numero usuari", numUsuari);

  if (
    numUsuari < 10 ||
    numUsuari > 30 ||
    isNaN(numUsuari) ||
    numUsuari === null ||
    numUsuari === undefined ||
    numUsuari === ""
  ) {
    alert("Introdueix un numero entre 10 i 30 si us plau");
  } else {
    arrayNumerosGenerada = arrayNumeroAleatoris(numUsuari);

    for (i = 0; i < arrayNumerosGenerada.length; i++) {
      numero = arrayNumerosGenerada[i];
      if (numero >= 0 && numero <= 20) {
        numeroPetit++;
      } else if (numero >= 21 && numero <= 40) {
        numeroMitja++;
      } else if (numero >= 41 && numero <= 60) {
        numeroGran++;
      }
    }

    numerosArray = arrayNumerosGenerada.length;
    percentatgePetit = (numeroPetit / numerosArray) * 100;
    percentatgeMitja = (numeroMitja / numerosArray) * 100;
    percentatgeGran = (numeroGran / numerosArray) * 100;

    document.getElementById("text").innerHTML =
      "La llargària de l'array és " + arrayNumerosGenerada.length;
    document.getElementById("text1").innerHTML =
      "El percentatge de numeros entre 1 i 20 és: " +
      percentatgePetit.toFixed(2) +
      " %";
    document.getElementById("text2").innerHTML =
      "El percentatge de numeros entre 21 i 40 és: " +
      percentatgeMitja.toFixed(2) +
      " %";
    document.getElementById("text3").innerHTML =
      "El percentatge de numeros entre 41 i 60 és: " +
      percentatgeGran.toFixed(2) +
      " %";
    document.getElementById("text4").innerHTML =
      "Els numeros generats són : " + arrayNumerosGenerada.join(", ");
  }
}
