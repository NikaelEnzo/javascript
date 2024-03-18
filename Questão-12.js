/* 
Questão 12: Como você pode iterar por meio de um array em JavaScript 
usando um loop for?
*/

function contarAte(numero) {
    for(let i = 1; i <= numero; i++) {
        console.log("Contagem: ", i);
    }
}

contarAte(5)