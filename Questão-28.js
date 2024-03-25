/* 
Questão 28: Como você pode converter uma string em um número inteiro em 
JavaScript? 
*/

let numeroString = "42";
let numero = parseInt(numeroString);

console.log("tipo de 42:", typeof numero);
console.log(numero);


let hexaString = "A";
let numeroHexa = parseInt(hexaString, 16);

console.log(numeroHexa);
console.log("tipo de 10:", typeof numeroHexa);
