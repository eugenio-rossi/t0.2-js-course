let list = {
    id: Math.floor(Math.random()* 100),
    name: "Title",
    tasks: [],
    color: "#ececec"
};

let ulLista = document.getElementById("sectionListedElements");
const parentList = ulLista.parentNode;

function deleteFromTasks(index) {
     list.tasks.splice(index, 1);
     ulLista.innerHTML = "";

     list.tasks.forEach(element => {
      cerateListButton(element);
     });
 }

 function cerateList(elementValue){
  cerateListButton(elementValue);
  list.tasks.push(elementValue);
 }

 // Necessario crearne due, la cui unica differenza è nel fatto che questa sotto non pusha nell'oggetto la lista?
 function cerateListButton(elementValue){
  const elementIndex = list.tasks.indexOf(elementValue);
  let listHTML = "<li>" + elementValue;
  listHTML += "<button onclick='deleteFromTasks(" + elementIndex + ")' style='margin-left:20px;'>X</button>";
  listHTML += "</li>";
  ulLista.innerHTML += listHTML;
 }

const listSection = document.getElementById("list-section");

function addElementToList() {
  const taskElement = document.getElementById('listTask');
  const taskValue = taskElement.value;
  const titleList = document.getElementById('title').value;
  const colorList = document.getElementById('color').value;
  list.name = titleList;
  list.color = colorList;

  // Use falsy
  if (taskValue) {
    cerateList(taskValue);
  }
  else{
    alert("seleziona un valore valido");
  }
}

function saveList(){
    let listToJSON = JSON.stringify(list);
    let listKey = "list ID : " + list.id;
    localStorage.setItem(listKey, listToJSON);
    ulLista.innerHTML = "";

    // Creo elemento per appenderlo dopo la sezione riservata alla creazione della lista
    let newDomItem = document.createElement("div");
    newDomItem.setAttribute("id", list.id); 
    newDomItem.setAttribute("class", "card newElement"); 
    newDomItem.setAttribute("style","background-color:" + list.color);
    newDomItem.innerHTML = `<h5 class="card-title">${list.name}</h5><br>`;
    list.tasks.forEach(element => {
      newDomItem.innerHTML += `<li class="card-text">${element}</li><br>`;
    });

    parentList.insertBefore(newDomItem, ulLista.nextSibling);

  }
