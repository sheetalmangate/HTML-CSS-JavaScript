const todoInput = document.querySelector("#todo-text");
const todoCount = document.querySelector("#todo-count");
const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form");

var todos = [];

//store todo in local storage   
const storeTodo = function ( todos ) {
    localStorage.setItem( 'todos', JSON.stringify(todos));
}

const init = function() {

    const localTodos = JSON.parse(localStorage.getItem('todos'));
    
    if( localTodos != null ) {
        todos = localTodos;
    }
    renderTodo();
}

//catch the submit event of form
todoForm.addEventListener('submit', function(event) {

    event.preventDefault();

    const todoText = todoInput.value.trim();

    if( todoText === '' ) {
        return;
    }

    todos.push(todoText);
    todoInput.value = '';
    storeTodo(todos);
    renderTodo();

});

//render todo on html page
const renderTodo = function() {

    todoList.innerHTML = '';
    todoCount.textContent = todos.length;

    for( let i = 0; i< todos.length; i++ ) {

        const todo = todos[i]

        const li = document.createElement('li');
        li.textContent = todo;
        li.setAttribute( 'data-index', i );

        const button = document.createElement('button');
        button.textContent = ' complete ✔️';
        button.setAttribute( 'data-buttonid', i);

        li.appendChild(button);
        todoList.appendChild(li);

    }

}

//add eventlistner for complete button
todoList.addEventListener('click', function( event ) {
    
    const element = event.target; 
    const itemId = element.dataset.buttonid;
    
    //if event is triggered after button click
    if( element.matches('button') === true ) {
        //remove index from todos[]
        todos.splice(itemId, 1);
        storeTodo();
        renderTodo();
    }

});


init();
