$(function () {
    let btnElement = $('button');
    let inputElement = $('input');
    let ulElement = $('ul');

    let todos = JSON.parse(localStorage.getItem('list_todos')) || [];

    function renderTodos() {
        listElement.innerHTML = '';

        for (todo of todos) {

            let todoElement = document.createElement('li');
            let todoText = document.createTextNode(todo);

            let linkElement = document.createElement('a');
            linkElement.setAttribute('href', '#');
            let pos = todos.indexOf(todo);
            linkElement.setAttribute('onclick', 'deleteTodo')

        }

    }

    btn.click(function () { });
});