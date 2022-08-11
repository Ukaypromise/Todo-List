import "./style.css";

const taskInput = document.querySelector(".input-container input");
 let todos = JSON.parse(localStorage.getItem("todo-list")); // get todos from localStorage

// Show todos
const todoList = document.querySelector(".todo-list");
const showTodo = () => {
  let li = '';
  if(todos){
    todos.forEach((todo, id) => {
      li += `<li id="${id}"><input class="update" type="checkbox" id="${id}">${todo.text} <i id="${id}" class="fas fa-ellipsis-v dot main"></i><i class="fas fa-trash-alt delete main"></i> </li>        
      `;
    });
    todoList.innerHTML = li;
  }
  
}
showTodo()

  

taskInput.addEventListener("keyup", (e) => {
  let userTask = taskInput.value.trim();
  if (e.key === "Enter" && userTask) {  
    if (!todos) {
      todos = []; //If no todo pass an empty array
    }
    taskInput.value = "";
    let newTodo = {
      id: todos.length + 1,
      text: userTask,
      isCompleted: false,
    };
    todos.push(newTodo); //Adding new task to the list
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showTodo();
  }
});



