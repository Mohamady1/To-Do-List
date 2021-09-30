//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const d = new Date();
document.getElementById("demo").innerHTML =
("  " + (d.getMonth()+1) + "." + d.getDate() + "." + d.getFullYear());

document.getElementById("time").innerHTML =
("  " + d.getHours() + "H:" + (d.getMinutes()+1) + "M:" + d.getSeconds()) + "S";

//Event Listeners
//document.addEventListener('DOMContentLoaded', getBack);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions
function addTodo(event) {
    event.preventDefault();
    //todo div 
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create li
    const newTodo = document.createElement('li');
    const value = todoInput.value;
    if (value === '') {
        alert('You Have To Write Something !!');
    }
    else {
    newTodo.textContent = value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //complete
    const completeButton = document.createElement('button');
    completeButton.innerHTML = `<i class="fas fa-check"></i>`;
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton);
    //close
    const trashButton = document.createElement('button');
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add('delete-btn');
    todoDiv.appendChild(trashButton);
    //append div
    todoList.appendChild(todoDiv);
    todoInput.value = '';
    }
}

function deleteCheck (e) {
    const item = e.target;

    //delete
    if (item.classList[0] === 'delete-btn') {
        const todo = item.parentElement;
        todo.classList.add('fall');
        //removeLocalTodo(todo);
        todo.addEventListener('transitionend', function() {
        todo.remove();
        });
    }

    //check
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.add('completed');
    }
}