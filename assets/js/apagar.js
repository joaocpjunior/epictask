const botoes = document.querySelectorAll(".btn-apagar")

function apagar(id) {
    //buscar os dados do local storage
    const tarefas = JSON.parse(localStorage.getItem("tarefa")) || []

    //remover a tarefa
    const tarefas_filtradas = tarefas.filter(tarefa => tarefa.id !== id)

    //salvar o localstorage
    localStorage.setItem("tarefa", JSON.stringify(tarefas_filtradas))

    atualizar()
}
