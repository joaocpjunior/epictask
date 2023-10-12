document.querySelector("#botao-cadastrar").addEventListener("click", ()=>{
   
   let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

    const tarefa = {
        titulo: document.querySelector("#titulo").value,
        descricao: document.querySelector("#descricao").value,
        nota:  document.querySelector("#nota").value,
        imagem: document.querySelector("#imagem").value
    }

    tarefas.push(tarefa)

    localStorage.setItem("tarefa", JSON.stringify(tarefas))
    
    window.location.href = "index.html"
})

