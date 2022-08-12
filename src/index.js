import './style.css';

import addTodo from '../modules/addTodo.js';
import { form, clear } from '../modules/domElement.js';
import getTodos from '../modules/getTodos.js';
import clearTodo from '../modules/clearTodo.js';

getTodos();

form.addEventListener('submit', (e) => addTodo(e));

clear.addEventListener('click', clearTodo);
