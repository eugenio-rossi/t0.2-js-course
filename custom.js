// Starting Over from here

// Declaration of Variabiles & Object

const list = {
  title : "Title",
  color : "#ececec",
  taskList : [] 
};

const addToList = document.getElementById("addToList");
const createList = document.getElementById("createList");

function addTaskToList() {

  // Logical part of the function
  const listTask = document.getElementById("listTask").value;
  list.taskList.push(listTask);
}

function validateTitle() {

  // Logical part of the function
  const title = document.getElementById("title").value;
  list.title = title;
}

function validateColor() {

  // Logical part of the function
  const color = document.getElementById("color").value;
  list.color = color;
}

function removeValue(element) {

  // DOM part of the function
  document.getElementById(element).value = "";
}

function saveList(){

  let jList = JSON.stringify(list);
  if (localStorage.getItem("listItem") === null){
    localStorage.setItem("listItem", jList);
  }
  else {
    jStoredValues = localStorage.getItem("listItem");
    oStoredValues = JSON.parse(jStoredValues);
    // non so come creare valori univoci per la chiave del nuovo oggetto da salvare -> il nuovo List dentro il local storage deve avere valore univoco......
  }
}