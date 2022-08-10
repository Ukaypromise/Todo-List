import todos from "./todoData.js";

const showTodo = () => {
  const todoList = document.querySelector(".todo-list");
  const todoApp = todos.map((todo) => {
    return `        
        <li id=${todo.id}><input type="checkbox">${todo.text} <i class="fas fa-ellipsis-v"></i> </li>        
      `;
  });
  todoList.innerHTML = todoApp.join("");
};

export default showTodo;
