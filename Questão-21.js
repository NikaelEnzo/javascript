/* 
Questão 21: Como você pode verificar se um objeto contém uma determinada 
propriedade em JavaScript?
*/

const nika = {
    jogo: "Terraria",
    bom: "SIM"
};

console.log(nika.hasOwnProperty("jogo"));
console.log(nika.hasOwnProperty("bom"));