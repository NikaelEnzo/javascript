/* 
Questão 24: Como você pode adicionar um evento de clique a um elemento 
HTML em JavaScript?
*/

let botao = document.getElementById("nomeTag") // palavra "botao" no java script = a Id do boão no html

botao.addEventListener("Click", function(){
    console.log("botão foi clicado")
})