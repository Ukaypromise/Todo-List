import todos from './todoData.js';

const showTodo = () => {
  const todoList = document.querySelector('.todo-list');
  const todoApp = todos.map(
    (todo) => `        
        <li id=${todo.id}><input type="checkbox">${todo.text} <i class="fas fa-ellipsis-v dot main"></i><i class="fas fa-trash-alt delete main"></i> </li>        
      `
  );
  todoList.innerHTML = todoApp.join('');
  
};

export default showTodo;

// const main = document.querySelector(".main");

// main.addEventListener("click", () => {
//   document.querySelector(".dot").style.display = "none";
//   document.querySelector(".delete").style.display = "block";
//   console.log("clicked");
// });