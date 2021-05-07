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
console.log(miLista)

// let stringDeLista = ''; Esto es parte de la otra forma de agregar los items a la lista
let numeroDeTarea = 0;

// const crearNumeroAleatorio = () => ( Math.ceil(((Math.random()*1000000))) );

let contenidoDeLista = [];
let listaEnString;
contenidoDeLista.push(localStorage.getItem('ListaDeTareas'));
pintarListaEnHTML();

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