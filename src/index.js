import "./style.css";

import addTodo from "../modules/addTodo";
import { form, clear } from "../modules/domElement";
import getTodos from "../modules/getTodos";
import clearTodo from "../modules/clearTodo";

getTodos();

form.addEventListener("submit", (e) => addTodo(e));

clear.addEventListener("click", clearTodo);
