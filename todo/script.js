document.addEventListener("DOMContentLoaded",function(){
  var listElement = document.querySelector("#app ul");
  var inputElement = document.querySelector("#app input");
  var buttonElement = document.querySelector("#app button");

  var todos = JSON.parse(localStorage.getItem("list_todos")) || [];

  function renderTodos() {
    listElement.innerHTML = "";

    todos.forEach (function(todo, index) {
      var todoElement = document.createElement("li");
      var todoText = document.createTextNode(todo);

      var linkElement = document.createElement("a");
      linkElement.setAttribute("href", "#");
      linkElement.setAttribute("onclick", "deleteTodo(" + index + ")");

      var linkText = document.createTextNode("done");

      linkElement.appendChild(linkText);
      todoElement.appendChild(todoText);
      todoElement.appendChild(linkElement);
      listElement.appendChild(todoElement);
    });
  } 

  renderTodos();

  function addTodo() {
    var todoText = inputElement.value.trim();
    if (todoText === "") return;
  
    todos.push(todoText);
    inputElement.value = "";
    renderTodos();
    saveToStorage();
  }

  buttonElement.onclick = addTodo;

  window.deleteTodo = function(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
  }

  function saveToStorage() {
    localStorage.setItem("list_todos", JSON.stringify(todos));
  }
});