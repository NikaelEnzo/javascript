/* 
Questão 19: Como você pode definir uma função de retorno de chamada 
(callback) em JavaScript?
*/

function minhaFuncao(funcaoCallback) {
    //   funcaoCallback pode ser qualquer coisa, e meramente uma palavra
console.log("Executando a lógica na minha função...")

setTimeout(function(){
// esta pedindo para esperar 5000ms/1s 
console.log("Operação assincrona concluida!...")

// Chamando callback
funcaoCallback();
//  substituida por minhaCallback
}, 5000)
}

function minhaCallback() {
//   minhaCallback pode ser qualquer coisa, e meramente uma palavra
console.log("Callback executado!")
}

minhaFuncao(minhaCallback)
// declaro que minhaFuncao ira substituir funcaoCallback por minhaCallback