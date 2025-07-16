let totalTodo = [];
if(JSON.parse(localStorage.getItem("AllTodos"))){
totalTodo = JSON.parse(localStorage.getItem("AllTodos"));
}
let addBtn = document.querySelector("#add-btn");
addBtn.addEventListener("click", addTodoInArray);
function addTodoInArray() {
  let todo = document.querySelector("#todo");
  let date = document.querySelector("#date");
  if(todo.value!=''){
  totalTodo.push({ todo: todo.value, dueDate: date.value });
  localStorage.setItem("AllTodos", JSON.stringify(totalTodo));
  console.log(totalTodo);
  todo.value = "";
  date.value = "";
  showTodoToUserUsingArrayData();
  }
}
function showTodoToUserUsingArrayData() {
  let todoContainer = document.querySelector(".todo-container");
  let containerHtml = "";
  for (let i = 0; i < totalTodo.length; i++) {
    let { todo, dueDate } = totalTodo[i];
    containerHtml += `<span class="todo-text">${todo}</span>
      <span class="todod">${dueDate}</span>
      <button class="btn btn-red" onclick="deleteTodo(${i})">Delete</button>`;
    console.log(containerHtml);
  }
  todoContainer.innerHTML = containerHtml;
}
function deleteTodo(index) {
  totalTodo.splice(index, 1);
  //As array data changes, so we again show todo to user
  showTodoToUserUsingArrayData();
  localStorage.setItem("AllTodos", JSON.stringify(totalTodo));
}
