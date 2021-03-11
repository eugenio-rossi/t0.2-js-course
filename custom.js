let list = {
    name: "Title",
    tasks: [],
    color: "#ececec"
};
let ulLista = document.getElementById("sectionListedElements");

// Questo probabilente servirà per un refactor
function deleteFromTasks(index) {
     list.tasks.splice(index, 1);
     ulLista.innerHTML = "";

     list.tasks.forEach(element => {
       console.log(list.tasks);
       console.log(element);
       ulLista.innerHTML += `<li> ${element} <button onclick='deleteFromTasks(list.tasks.length - 1)' style='margin-left:20px;'>X</button></li>`
     });
 }

const listSection = document.getElementById("list-section");

function addElementToList() {
  const taskElement = document.getElementById('listTask');
  const taskValue = taskElement.value;
  const titleList = document.getElementById('title');
  list.name = titleList;

  // Use falsy
  if (taskValue) {
    list.tasks.push(taskValue);
    let listHTML = "<li>" + taskValue;
    let indexElement = list.tasks.indexOf(taskValue);
    console.log(indexElement);
    listHTML += "<button onclick='deleteFromTasks(indexElement)' style='margin-left:20px;'>X</button>";
    listHTML += "</li>";
    ulLista.innerHTML += listHTML;
  }
  else{
    alert("seleziona un valore valido");
  }
  
}

function saveList(){

  let listedElements = document.getElementById("sectionListedElements").getElementsByTagName("li");
  // trasformo la collection HTML in array per semplicità
  let listedArray = Array.from(listedElements);
  listedArray.forEach(element => {
    alert(element.innerHTML);
  });
}


// Step:
// #1: Salvare a WebStorage L'elemento
// #1.1: OnSubmit del button, salvare a variabile il valore dell'input e inserirlo in un array nel web storage.
// #2: Creare una nuova Lista
// #3: Colorare gli elmenti