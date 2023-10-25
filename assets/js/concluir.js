function concluir(id) {
    //buscar do localstorage
    const tarefas = JSON.parse(localStorage.getItem("tarefa")) || []
    
    //buscar a tarefa com o id
    let tarefa = tarefas.find(t => t.id === id)

    //alterar o estado da tarefa
    tarefa.concluida = true

    //salvar no localstorage 
    localStorage.setItem("tarefa", JSON.stringify(tarefas))
    
    atualizar()
    calcularEstatistica()
}