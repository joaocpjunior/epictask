document.querySelector("#botao-cadastrar").addEventListener("click", ()=>{
   
   let tarefas = JSON.parse(localStorage.getItem("tarefa")) || []

    const tarefa = {
        id: Date.now(),
        titulo: document.querySelector("#titulo").value,
        descricao: document.querySelector("#descricao").value,
        nota:  document.querySelector("#nota").value,
        imagem: document.querySelector("#imagem").value,
        concluida: false
    }

    tarefas.push(tarefa)

    localStorage.setItem("tarefa", JSON.stringify(tarefas))
    
    window.location.href = "index.html"
    calcularEstatistica()
})

