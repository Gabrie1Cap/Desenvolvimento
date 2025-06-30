let tarefas = []

function addTarefa(){

    const inputTarefa = document.getElementById('inputTarefa')
    let tarefa = inputTarefa.value.trim();
    const mensagem = document.getElementById('mensagem');
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
        let i = 0
        for(i ; i < tarefas.length ; i++){
        const novaTarefa = document.createElement('li');
        novaTarefa.textContent = tarefas[i];
        listaTarefas.appendChild(novaTarefa,);
}}