// NO TIENEN HOISTING
// let / const 
// y arrow funtions tampoco
// var miFuncionFlecha = () => {};

// SI TIENE HOISTING
// las funciones function y var

const miBoton = document.getElementById('boton')
miBoton.addEventListener('click', agregarTarea)
const miEntrada = document.getElementById('entrada')
const miLista = document.getElementById('lista')

let contenidoDeLista = [];
let listaEnString;
contenidoDeLista.push(localStorage.getItem('ListaDeTareas'));
pintarListaEnHTML();

const i = function init() {
  let lista = localStorage.getItem('ListaDeTareas');
  console.log(lista)
  if (lista) {
    contenidoDeLista = lista.split(/\/li>/);
    contenidoDeLista.forEach((item, index, arr) => arr[index] = item + '/li>');
  }
  console.log('Nuestra lista traida del ls', contenidoDeLista);
}();

// function HighOrderFunction(callBackFunction) {
//   callBackFunction();
// }

// High order funtion
// function saludar(funcToWrap, horaDelSaludo) {
//   funcToWrap(horaDelSaludo);
// }

// funcion regular
// function tipoDeSaludo(tiempo) {
//   let saludo = 'Hola mi nombre es alberto y son las: ';
//   console.log(saludo + tiempo);
// }

// En ejecucion
// saludar(tipoDeSaludo, '12:30');

function agregarTarea() {
  //aqui agregaremos una tarea a la lista
  // stringDeLista += `<li> ${miEntrada.value} </li>\n` //Metodo más simple para concatenar los items de la lista

  let item = `<li> ${miEntrada.value}  <button id="${numeroDeTarea += 1}">Completado</button> </li>\n`;
  contenidoDeLista.push(item);

  pintarListaEnHTML();
  localStorage.setItem('ListaDeTareas', listaEnString);
}

function pintarListaEnHTML () {
  listaEnString = contenidoDeLista.join('')
  miLista.innerHTML = listaEnString;
}

function elimarTarea() {
  //aqui elimnaermos una tarea de la lista
}