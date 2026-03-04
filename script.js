//your code here
const input = document.getElementById("newTodoInput");
const button = document.getElementById("addTodoBtn");
const list = document.getElementById("todoList");

button.addEventListener("click", function () {
  const text = input.value.trim();

  // prevent empty todo
  if (text === "") return;

  const li = document.createElement("li");
  li.textContent = text;

  list.appendChild(li);

  // clear input
  input.value = "";
});

