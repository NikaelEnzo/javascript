// Declaração de uma variável
let nome; // Escopo de bloco = conteudo dentro de {}
var idade; // Escopo global = ver em todo o programa sendo o valor imutavel
const PI = 3.14; // Escopo de bloco dentro de um bloco e global fora de um bloco 


function soma() {
  if(true) {
    let nome = "nika"
    console.log(nome)
  }
  console.log(nome)
}

soma()