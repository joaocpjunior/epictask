window.addEventListener("load",atualizar)

function atualizar() {
    document.querySelector("#lista-tarefas").innerHTML= ""
    let tarefas = JSON.parse(localStorage.getItem("tarefa")) || []
    tarefas.forEach(tarefa => criarCard(tarefa))
}

function criarCard(tarefa) {
    const card = document.createElement("div")
    card.classList.add("col","s12","m6", "l4") 

    card.innerHTML = `
    <div class="card ${tarefa.concluida ? 'grey' : ''}">
        <div class="card-content">
            <span class="card-title">${tarefa.titulo}</span>
            <p>${tarefa.descricao}</p>
            <p>${tarefa.nota}</p>
            <img src="${tarefa.imagem}" alt=""> 
            <button class="btn red" onClick="apagar(${tarefa.id})"> deletar</button>
            <button class="btn green" onClick="concluir(${tarefa.id})"> concluído</button>
        </div>
    </div> 
    `

    document.querySelector("#lista-tarefas").appendChild(card)
}