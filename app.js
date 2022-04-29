// Selectors
const inputValue = document.querySelector('input')
const addBtn = document.querySelector('.btn-todo')
const displayTodo = document.querySelector('.display-todo')
const errorMessage = document.querySelector('.errorMessage')
const completed = document.querySelector('.completed')
let counter = 0;
let ulCounter = 0;

// Render todo
function render() {

  fetch("https://class17-todo.herokuapp.com/todo")
    .then((response) => response.json())
    .then((data) => {
      for (let j=10; j < data.length; j++){
        let ul = document.createElement('ul')
          let li = document.createElement('li')
          li.classList.add('list-todo')
          let span = document.createElement('span')
          span.innerHTML=data[j].todo
          span.setAttribute('data-check', 'false')
          span.setAttribute('data-text', 'false')
          span.classList.add('span')
          li.appendChild(span)
          ul.setAttribute('data-opacity', 'false')
          errorMessage.innerHTML = ''
      
          let i = document.createElement('i')
          i.classList.add('fas')
          i.classList.add('fa-trash')
          i.addEventListener('click', () => {
            ul.style.display = 'none'
            counter--;
            ulCounter--;
          })
          li.appendChild(i)
          ul.appendChild(li)
          displayTodo.appendChild(ul)
          inputValue.value = ''
          ulCounter++;
      
      
          let spanGet = span.getAttribute('data-check')
          // const ulGet = ul.getAttribute('data-opacity')
          ul.addEventListener('click', () => {
      
            if (spanGet === 'false') {
              span.setAttribute('data-check', 'true')
              span.setAttribute('data-text', 'true')
              ul.setAttribute('data-opacity', 'true')
              counter++;
              if (counter >= ulCounter) {
                counter = ulCounter;
              }
              spanGet = 'true';
              completed.innerHTML = counter + '/' + ulCounter + ' completed';
            }
      
            else {
              span.setAttribute('data-check', 'false')
              span.setAttribute('data-text', 'false')
              ul.setAttribute('data-opacity', 'false')
              counter--;
              if (counter >= ulCounter) {
                counter = ulCounter;
              }
              else if (counter < 0) {
                counter = 0;
              }
              spanGet = 'false'
            }
      
            completed.innerHTML = counter + '/' + ulCounter + ' completed';
          })
      
          completed.innerHTML = counter + '/' + ulCounter + ' completed';

      }
    });
}


render();

function addTodo() {

  addBtn.addEventListener('click', ()=>{
    if (inputValue.value === '') {
      errorMessage.innerHTML = 'This field is required'
    }
    else{
      fetch("https://class17-todo.herokuapp.com/todo/create", {
    method: "POST",
    body: JSON.stringify({ todo: inputValue.value }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      render();
    });
    }
  })
  
}


function del() {

  let delElement = document.querySelectorAll('i')
  delElement.forEach(del => {
    del.addEventListener('click', (e) => {
      e = event.target;
      console.log(e);
    })
  })
}
