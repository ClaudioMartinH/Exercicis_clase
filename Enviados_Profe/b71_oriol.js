// BUCLES
// - COMPARACIONS
// OPERADOR    DESCRIPCIÓ 
// ==          Igual a ...
// ===         Igual a ... i mateix tipus de dades
// !=          Diferents a ... 
// >           Major a ... 
// <           Menor a ... 
// >=          Major ó igual a ... 
// <=          Menor ó igual a ... 

// CONCATENACIÓ DE COMPARACIONS (Mitjantçant operadors lógics)
// OPERADOR    DESCRIPCIÓ 
// &&          AND: Retorna un TRUE si es compleixen TOTES les condicions 
// ||          OR: Retorna un TRUE si se compleix ALGUNA de les condicions 
// !           NOT: INVERTEIX el valor Boolea

// -------------------------------------------------
// Utilitzem els bucles per executar una repetició controlada d'una instrucció
// console.log(1);
// console.log(2);
// console.log(3);
// . 
// . 
// . 
// console.log(10);
// En el códi anterior no te sentit repetir cada console.log() per imprimir els numeros del 1 al 10
// ---------------------------------------------------------
// WHILE
// sintaxis: 
// while(comparació){

// }

// Exemple: imprimir els numeros del 1 al 10
var i = 1; // declaro e INICIALITZO la variable i(index) a 1
while (i <= 10) { // COMPARACIÓ de la variable i(index)
    console.log(i);
    i++; // ACTUALIZACIÓ de la variable i(index)
}
console.log("----------------------------------------");
// DO-WHILE: Primer s'executa i després compara (al revés que el WHILE)
// sintaxis: 
// do{

// }while()