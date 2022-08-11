import "./style.css";

const taskInput = document.querySelector(".input-container input");
let todos = JSON.parse(localStorage.getItem("todo-list"));  // get todos from localStorage

const list = document.querySelector("ul");
const form = document.querySelector("form");
todos = [];

const showTodo = () => {
  list.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    const checked = document.createElement("input");
    const text = document.createElement("input");
    const menuIcon = document.createElement("span");
    const deleteIcon = document.createElement("span");
    li.setAttribute("class", "li-wrapper");
    checked.type = "checkbox";
    checked.name = "task-done";
    checked.checked = false;
    checked.id = todo.id;
    text.type = "text";
    text.name = "task";
    text.value = todo.text;
    text.id = todo.id;
    text.disabled = true;
    text.style.cursor = "pointer";
    text.style.background = "none";
    text.style.color = "black";
    menuIcon.innerHTML = '<i class="fas fa-ellipsis-v " for="select"></i>';
    deleteIcon.innerHTML = `< class="fas fa-trash-alt" id="${todo.id}"></i>`;
    deleteIcon.style.display = "none";
    li.appendChild(checked);
    li.appendChild(text);
    li.appendChild(menuIcon);
    li.appendChild(deleteIcon);
    list.appendChild(li);
  });
};
showTodo();

taskInput.addEventListener("keyup", (e) => {
  e.preventDefault();
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

