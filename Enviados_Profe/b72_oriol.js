// ---------------------------------------------------------
// FOR: S'utilitza generalment per traballar amb variables tipus ARRAY
// sintaxis: 
// for(var i = 0; i < valor; i++) {
//     intruccions
// }
// Exemple1: imprimir els numeros del 1 al 10
for (var i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("----------------------------------------");
// Exemple2: Imprimir les dades d'un ARRAY
var leng_prog = ['JS', 'Python', 'PHP', 'JAVA', 'R', 'SQL'];
// Existeix una propietat (length) que ens retorna la quantitat (longitut) dels elements d'un ARRAY
console.log(leng_prog.length);
// Podem seleccionar (apuntar) a una determinada dada del ARRAY, amb el nom del ARRAY i entre corchets, la posició (númerica) començant per 0.
// Exemple: Imprimir la posició 3 (JAVA)
console.log(leng_prog[3]);
// Imprimim (recorrer) el ARRAY mitjantçant el FOR 
for (var i = 0; i < leng_prog.length; i++) {
    console.log(leng_prog[i]);
}

//Example 3: Calcular Ivas dels productes
var productes = ["Llet", "Playstation", "Tv", "Maduixes"];
var pvp = [0.80, 340, 852, 3.40];
var impostos = [10, 21, 21, 10];

var sumiva1 = 0;
var sumiva2 = 0;
var subtotal = 0;

// Imprimim (recorrer) el ARRAY mitjantçant el FOR 
for (var i = 0; i < productes.length; i++) {
    console.log(productes[i] + pvp[i] + " Euros <br>");

    //Sumem els ivas
    if (impostos[i] == 10) {
        sumiva1 = sumiva1 + ((pvp[i] * 10) / 100);
    } else {
        sumiva2 = sumiva2 + ((pvp[i] * 21) / 100);
    }

    //Sumem valors dels productes
    subtotal = (subtotal + pvp[i]);
}

//Generem el subtotal
console.log("Subtotal " + subtotal + " Euros <br>");

//Generem el total dels ivas
console.log("Iva (10%) " + sumiva1 + " Euros <br>");
console.log("Iva (21%) " + sumiva2 + " Euros <br>");

//Generem el subtotal i total
console.log("Total " + (subtotal + sumiva1 + sumiva2) + " Euros <br>");