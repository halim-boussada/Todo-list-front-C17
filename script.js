    // todo list, ADD AN ITEM

    // Chose item

    const form = document.querySelector("form");
    const input = document.querySelector("#txtTaskName");
    const btnAddNewTask = document.querySelector("#btnAddNewTask");
    const btnDeleteAll = document.querySelector("#btnDeleteAll");
    const taskList = document.querySelector("#task-list");
    const items = ["Todo 1", "Todo 2", "Todo 3", "Todo 4", "Todo 5"];


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
        items.forEach(function (item) {
            createItem(item);
        })
    }

    // this function works for all 
    function createItem(text) {
        // Add "li"

        const li = document.createElement("Li");
        li.className = "list-group-item list-group-item-secondary";
        li.appendChild(document.createTextNode(text));

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
            }
        }
        e.preventDefault();


    }


    // DELETE ALL ITEMS
    function deleteAllItems(e) {
        if (confirm("Do you want to delete ALL?")) {
            //     taskList.childNodes.forEach(function(item){
            //         if(item.nodeType === 1){
            //             item.remove();
            //         }
            //     })
            // }
            taskList.innerHTML = ""; // !!! ustteki fonksiyonu kullanirsam, elle eklenenlerden bir tanesi silinmiyor
        }
    }



    