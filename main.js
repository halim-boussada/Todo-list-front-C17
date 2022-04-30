function render() {
   fetch("https://class17-todo.herokuapp.com/todo")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (var i = 0; i < data.length; i++) {
        document.getElementById("root").innerHTML += `<li>${data[i].todo}</li>`;
      }
    });
}
render();

function createTodo() {
  // the database is shared please dont send ####
  fetch("https://class17-todo.herokuapp.com/todo/create", {
    method: "POST",
    body: JSON.stringify({ todo: document.getElementById("todo").value }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      render();
    });
}