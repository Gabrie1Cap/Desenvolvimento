function addTarefa(){
    let inputTarefa = document.getElementById('inputTarefa')
    let tarefa = inputTarefa.value;

    let listaTarefas = document.getElementById('listaTarefas');
    let novaTarefa = document.createElement('li');

    novaTarefa.textContent = tarefa;
    listaTarefas.appendChild(novaTarefa);

    let mensagem = document.getElementById('mensagem');
    mensagem.textContent = 'Tarefa adicionada com sucesso!';

    inputTarefa.value = '';
};