window.addEventListener("load", () => {
    let tarefas = JSON.parse(localStorage.getItem("tarefa")) || []
    tarefas.forEach(tarefa  =>  criarCard(tarefa))
})

function criarCard(tarefa) {
    const card = document.createElement("div")

    card.innerHTML = `
    <div class="card">
        <div class="card-content">
            <span class="card-title">${tarefa.titulo}</span>
            <p>${tarefa.descricao}</p>
            <p>${tarefa.nota}</p>
            <img src="${tarefa.imagem}" alt="">
        </div>
    </div> 
    `

    document.querySelector("#lista-tarefas").appendChild(card)
}