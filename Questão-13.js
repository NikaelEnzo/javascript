/* 
Questão 13: Como você pode verificar se um valor está contido em um array 
em JavaScript?
*/

let frutas = ["A","B","C","D"]

let procurar = frutas.find((element) => element > "A");

console.log(procurar)