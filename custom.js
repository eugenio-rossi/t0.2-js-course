const list = {
    name: "Title",
    tasks: [],
    color: "#ececec"
};

const listSection = document.getElementById("list-section");

const arrayList = []

function addElementToList() {
  const taskElement = document.getElementById('listTask');
  const titleList = document.getElementById('title');
  const taskValue = taskElement.value;

  arrayList.push(taskValue);
  let ulLista = document.getElementById("sectionListedElements");
  list.name = titleList;
  if (taskValue != "") {
    ulLista.innerHTML += `<li>${taskValue}</li>`;
    list.tasks.push(arrayList);
  }
  else{
    alert("seleziona un valore valido")
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