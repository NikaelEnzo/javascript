/*
Questão 4: Qual é a diferença entre == e === em JavaScript?
*/

let num1 = 1
let num2 = "1" 

console.log(typeof num1);
console.log(typeof num2);

console.log(num1 == num2); // é uma igualdade ampla = ignora os "tipos" da variaveis (olhar questão 2)
console.log(num1 === num2); // é uma igualdade estrita = difere os "tipos" da variaveis