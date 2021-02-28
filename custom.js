console.log('connected');

const lista = document.getElementById('lista');
const listaValue = lista.nodeValue;

if(!localStorage.getItem('listaValue')) {
    populateStorage();
  } else {
    setStyles();
  }