// CONDICIONALS
// - COMPARACIONS
// OPERADOR    DESCRIPCIÓ 
// ==          Igual a ...
// ===         Igual a ... i mateix tipus de dade
// !=          Diferents a ... 
// >           Major a ... 
// <           Menor a ... 
// >=          Major ó igual a ... 
// <=          Menor ó igual a ... 

// Tota comparació en programació, ve a retornar un valor Boolea (true/false)
// Ejemplos:
console.log("1- ");
console.log(5 == 5); // 1
console.log("2- ");
console.log(5 == 6); // 2
console.log("3- ");
console.log(5 != 6); // 3
console.log("4- ");
console.log("Hola" == "Hola"); // 4
console.log("5- ");
console.log("Hola" == "hola"); // 5
console.log("6- ");
console.log(5 == "5"); // 6
console.log("7- ");
console.log(5 === "5"); // 7
console.log("8- ");
console.log(5 > 6); // 8
console.log("9- ");
console.log(5 >= 5); // 9

// CONCATENACIÓ DE COMPARACIONS (Mitjantçant operadors lógics)
// OPERADOR    DESCRIPCIÓ 
// &&          AND: Retorna un TRUE si es compleixen TOTES les condicions 
// ||          OR: Retorna un TRUE si es compleix ALGUNA de les condicions 
// !           NOT: INVERTEIX el valor Boolea
console.log("----------------------------------------");
// Ejemplos:
console.log("1- ");
console.log(5 == 5 && "Hola" == "Hola"); // 1
console.log("2- ");
console.log(5 == 6 && "Hola" == "Hola"); // 2
console.log("3- ");
console.log(5 == 5 || "Hola" == "Hola"); // 3
console.log("4- ");
console.log(5 == 6 || "Hola" == "Hola"); // 4

console.log("----------------------------------------");

// IF - ELSE 
// sintaxis: 
// if(comparacio){
//     executen les instrucions SI es compleix la comparacio
// }else{
//     executen les instrucions SI NO es compleix la comparacio
// }

// Ejemplo: Comprobar el major dels dos números 
var n1 = 20;
var n2 = 20;

if (n1 > n2) {
    console.log("n1 es major a n2");
} else if (n2 > n1) {
    console.log("n2 es major a n1");
} else {
    console.log("Els números son iguals");
}

// Exemple: Comprobar el email i password en un login
// simulem una base de dades 
var emailDB = "josep@ciber.cat";
var passDB = "a1234a";
// simulem l'entrada de dades del usuari
var emailUSER = "josep@ciber.cat";
var passUSER = "a1234";

// comprobació del LOGIN
if (emailDB == emailUSER && passDB == passUSER) {
    console.log("LOGIN OK!!!");
} else {
    console.log("DADES DE LOGIN INCORRECTES!!!");
}

console.log("----------------------------------------");