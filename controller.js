// Starting Over

// Declaring all methods for lists

// Set global variable, the item 

// Function to create List
function createList(list){
    // Check all elements of the List object
    if (list.title !== "" && list.color !== "" && list.tasks.lenght > 0) {
    // Check if local storage contains our object
    // Check if the local storage is empty
    var lists = window.localStorage.getItem("Lists");
    
    lists = lists ? addListLocalStorage(list, listsKey) : localStorage.setItem("Lists", JSON.stringify(list);
    if (lists) {

    }
    else {
        // If it is empty set the item Lists in Local Storage
        window.localStorage.setItem("Lists", JSON.stringify(list));
    }
  
    }
  }
  
  // Function to delete List
  function deleteList(list) {
  
  }
  
  // Function to add item to List
  function addItemList(item, list) {
  
  }
  
  // Function to add remove item to List
  function removeItemList(item, list) {
  
  }

  // Function to add List to Local Storage
  function addListLocalStorage(list, listsKey) {
        stored = window.localStorage.getItem(listsKey);
        stored = JSON.parse(stored);

        // Push the value of the single list in the already stored Values
        stored.push(list);




  }
  
  