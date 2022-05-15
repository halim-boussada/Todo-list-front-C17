    // todo list, ADD AN ITEM

    // Chose item

    const form = document.querySelector("form");
    const input = document.querySelector("#txtTaskName");
    const btnAddNewTask = document.querySelector("#btnAddNewTask");
    const btnDeleteAll = document.querySelector("#btnDeleteAll");
    const taskList = document.querySelector("#task-list");
 
    let todos;


    // LOAD ITEMS
    loaditems();


    // Functions for all 
    eventlisteners();

    function eventlisteners() {
        // submit event
        form.addEventListener("submit", addNewItem);

        // delete "an item"
        taskList.addEventListener("click", deleteItem);

        // delete "all items"
        btnDeleteAll.addEventListener("click", deleteAllItems);
    }

    function loaditems() {
        todos = getItemsFromLS();
        todos.forEach(function (item) {
            createItem(item);
        })
    }
    
    // get items from LOCAL STORAGE
    function getItemsFromLS(){
           if(localStorage.getItem("todos") === null){
               todos = [];
           }
           else{
               // JSON.parse turn the string to an array!!!
               todos = JSON.parse(localStorage.getItem("todos"));

           }
           return todos;

    }

// set items to LOCAL STORAGE
    function setItemToLS(newToDo){
        todos = getItemsFromLS();
        todos.push(newToDo);
        localStorage.setItem("todos",JSON.stringify(todos));
    
    }

    // this function works for all 
    function createItem(newToDo) {
        // Add "li"

        const li = document.createElement("Li");
        li.className = "list-group-item list-group-item-secondary";
        li.appendChild(document.createTextNode(newToDo));

        // Add "a"

        const a = document.createElement("a");
        a.classList = "delete-item float-right";
        a.setAttribute("href", "#");
        a.innerHTML = '<i class="fas fa-times"></i>';

        li.appendChild(a);
        taskList.appendChild(li);
    }

    function addNewItem(e) {
        if (input.value === '') {
            alert("Please add an item");
        }

        // create item
        createItem(input.value);

        setItemToLS(input.value);
        //clear the box after add an item
        input.value = "";




        e.preventDefault();
    }


    // DELETE AN ITEM
    function deleteItem(e) {
        //console.log(e.target);


        if (e.target.className === "fas fa-times") {
            if (confirm("Do you want to delete it?")) {
                // console.log(e.target);
                e.target.parentElement.parentElement.remove();
                deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
            }
        }
        e.preventDefault();


    }


    function deleteTodoFromStorage(deletetodo){
        let todos = getItemsFromLS();
        todos.forEach(function(todo,index){
            if(todo === deletetodo){
                todos.splice(index,1);
            }
        });
        localStorage.setItem("todos",JSON.stringify(todos));

    }

    // DELETE ALL ITEMS
    function deleteAllItems(e) {
        if (confirm("Do you want to delete ALL?")) {
            while(taskList.firstChild){
                taskList.removeChild(taskList.firstChild);
            }
            localStorage.clear();

    }
}



    