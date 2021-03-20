// Starting Over from here

// Declaration of Variabiles & Object

let list = [{
  id : Math.round((Math.random() * 100)),
  title : "Title",
  color : "#ececec",
  taskList : [] 
}];


const addToList = document.getElementById("addToList");
const createList = document.getElementById("createList");

let cardBody = document.getElementsByClassName("card-body").item(0);
let sectionListedTitle = document.getElementById("sectionListedTitle");

function addTaskToList() {
  // Logical part of the function
  const listTask = document.getElementById("listTask").value;
  list[0].taskList.push(listTask);
}

function validateTitle() {

  // Logical part of the function
  const title = document.getElementById("title").value;
  list[0].title = title;

  // Dom part of the function
  sectionListedTitle = document.getElementById("sectionListedTitle");
  sectionListedTitle.innerHTML = title;

}

function validateColor() {

  // Logical part of the function
  const color = document.getElementById("color").value;
  list[0].color = color;

  // Dom part of the function
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