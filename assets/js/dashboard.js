function calcularEstatistica(){

const tarefas = JSON.parse(localStorage.getItem("tarefa")) || []

const pendentes = tarefas.filter(t => t.concluida == false)

const qtdePendete = pendentes.length

document.querySelector("#qtde-pendente").innerHTML = qtdePendete

const concluidas = tarefas.filter(t => t.concluida == false)
const qtdeconcluida = concluidas.length
document.querySelector("#qtde-concluida").innerHTML = qtdeconcluida


const totalPontos = tarefas.reduce((total, t) => total += +t.pontos, 0)
document.querySelector("#total-pontos").innerHTML = totalPontos 

const meusPontos = concluidas.reduce((total, t) => total += +t.pontos, 0)
document.querySelector("#meus-pontos").innerHTML = meusPontos 

console.log(totalPontos)
console.log(meusPontos)
}

calcularEstatistica()

