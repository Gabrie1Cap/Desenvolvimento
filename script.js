let tarefas = []
const mensagem = document.getElementById('mensagem');
function addTarefa(){

    const inputTarefa = document.getElementById('inputTarefa')
    let tarefa = inputTarefa.value.trim();

    let mensagemCerta = 'Tarefa adicionada com sucesso!';
    let mensagemErro = 'Por favor digite uma tarefa!';

    if(tarefa == ''){
        mensagem.style.color = '#AD3204'
        mensagem.textContent = mensagemErro;    
    }else{
        tarefas.push(tarefa)
        mensagem.style.color = '#5BBA85'
        mensagem.textContent = mensagemCerta;
        renderList()
        inputTarefa.value = '';
}};

function renderList(){
        const listaTarefas = document.getElementById('listaTarefas');
        listaTarefas.innerHTML = ''

        for(let i = 0 ; i < tarefas.length ; i++){
            const novaTarefa = document.createElement('li');
            novaTarefa.textContent = tarefas[i];

            let botaoRemover = document.createElement('button')
            botaoRemover.className = 'btnRemover'
            botaoRemover.textContent = 'Remover'
            botaoRemover.onclick = () => removerTarefa(i)

            let botaoEditar = document.createElement('button')
            botaoEditar.className = 'btnEditar'
            botaoEditar.textContent = 'Editar'
            botaoEditar.onclick = () => editarTarefa(i)

            let botaoConcluir = document.createElement('button')
            botaoConcluir.className = 'btnConcluir'
            botaoConcluir.textContent = 'Concluída'
            botaoConcluir.onclick = () => tarefaConcluida(i)
            
            novaTarefa.appendChild(botaoRemover)
            novaTarefa.appendChild(botaoEditar)
            novaTarefa.appendChild(botaoConcluir)
            listaTarefas.appendChild(novaTarefa);
}}

function removerTarefa(i){
    tarefas.splice(i , 1)
    mensagem.textContent = 'Tarefa removida'
    renderList()
}

function editarTarefa(i){
    let tarefaEditada = prompt('Editar Tarefa:')
    if (tarefaEditada.trim() !== ''){
        tarefas[i] = tarefaEditada
        mensagem.textContent = 'Tarefa editada com sucesso!'
        renderList()
    }
}

function limparTarefas(){
    if(tarefas.length !== 0){
    tarefas.length = 0
    renderList()
    mensagem.textContent = 'Todas as tarefas foram excluídas com sucesso!'
    mensagem.style.color = 'green'
}}

function tarefaConcluida(i){
    tarefas.splice(i , 1)
    renderList()
    mensagem.textContent = 'Tarefa marcada como concluída!'
    tarefas[i].style.backgroundColor = 'green'
}