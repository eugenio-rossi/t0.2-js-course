const list = {
    name: "Title",
    tasks: [],
    color: "#ececec"
};

const sezioneLista = document.getElementById("sezione-lista");

const arrayList = []

function addElementToList() {
  const elementoLista = document.getElementById('elementoLista');
  const listaValue = elementoLista.value;
  arrayList.push(listaValue);
  let ulLista = document.getElementById("ul-lista");
  ulLista.innerHTML += `<li>${listaValue}</li>`;
  list.tasks.push(arrayList);

}

function saveList(){

  let listedElements = document.getElementById("ul-lista").getElementsByTagName("li");
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