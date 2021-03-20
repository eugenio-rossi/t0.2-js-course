// Starting Over from here

// Declaration of Variabiles & Object

let list = [{
  id : Math.round((Math.random() * 100)),
  title : "Title",
  color : "#ececec",
  taskList : [] 
}];

// Since it is a JSON like obj, I have a varible to bypass calling the index anytime
aList = list[0];

// Get the input of Tasks
const addToList = document.getElementById("addToList");
// Get the input of Create list button
const createList = document.getElementById("createList");
// Get the DOM element of the ul
const sectionListedElements = document.getElementById("sectionListedElements");

// Get the Card of the List where it is going to be printed when created
let cardBody = document.getElementsByClassName("card-body").item(0);
// Get the Card of the Title where it is going to be printed when created
let sectionListedTitle = document.getElementById("sectionListedTitle");

// Function to create list - used as part of following functions
function CreateList(){
  sectionListedElements.innerHTML = "";
    
  // Recreate the html structure from the object values each time ad item is added
  aList.taskList.forEach(element => {
      sectionListedElements.innerHTML += "<li>" + element;
      // the function removeTask has the index of the element as input to remove it from DOM & from list
      sectionListedElements.innerHTML += `<button onclick="removeTask(`+ aList.taskList.indexOf(element) + `)" id="removeTitleToList"><span class="lnr lnr-cross-circle"></span></button>`;
      sectionListedElements.innerHTML += "</li>";
  });
}

function addTaskToList() {
  // Logical part of the function
  let listTask = document.getElementById("listTask").value;

  // Che is the value of the task is populated & if it is not already in the list
  if ((listTask) && !(aList.taskList.includes(listTask))) {
    // Push the value in the object
    aList.taskList.push(listTask);

    // DOM part of the function
    CreateList();
  }
}



function removeTask(index){
  aList.taskList.splice(index, 1);
  CreateList();
}

function validateTitle() {

  // Logical part of the function
  const title = document.getElementById("title").value;
  aList.title = title;

  // DOM part of the function
  sectionListedTitle = document.getElementById("sectionListedTitle");
  sectionListedTitle.innerHTML = title;

}

function validateColor() {

  // Logical part of the function
  const color = document.getElementById("color").value;
  aList.color = color;

  // DOM part of the function
  cardBody.style.backgroundColor = color;
}

function removeValue(element) {

  // DOM part of the function
  document.getElementById(element).value = "";
  if (element == "title"){
    sectionListedTitle.innerHTML = "";
  }
  else {
    cardBody = document.getElementsByClassName("card-body").item(0);
    cardBody.style.backgroundColor = "#000";
  }
}

function restartList(arg) {
  arg[0].id = Math.round((Math.random() * 100));
  arg[0].title = "Title";
  arg[0].color = "#ececec";
  arg[0].taskList = [];
}

function saveList(){
  let jList = JSON.stringify(list);
  if (localStorage.getItem("listItem") === null){
    localStorage.setItem("listItem", jList);
  }
  else {
    jStoredValues = localStorage.getItem("listItem");
    oStoredValues = JSON.parse(jStoredValues);
    console.log(list);
    oStoredValues.push(list);
    localStorage.setItem("listItem", JSON.stringify(oStoredValues));
  }

  // In any case the list value's to be reinitialized to   
  restartList(list);
} 