/* 
Questão 22: Como você pode verificar se uma variável é nula em JavaScript?
*/

let variavel = null;

console.log(variavel?.propriedade) // verifica se a propriedade “variavel” existe no objeto, Caso o objeto seja nulo, o valor 'undefined' será retornado

if (variavel === null){
    console.log("true")
}