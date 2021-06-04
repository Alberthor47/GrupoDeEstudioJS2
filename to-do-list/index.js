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
let numeroDeReferencia = 0;

let listaEnString;
contenidoDeLista.push(localStorage.getItem('ListaDeTareas'));
pintarListaEnHTML();

const main = function init() {
  let lista = localStorage.getItem('ListaDeTareas');
  if (lista) {
    contenidoDeLista = lista.split(/\/li>/);
    contenidoDeLista.forEach((item, index, arr) => {
        arr[index] = item + '/li>'
    });
  }

}();

function agregarTarea() {
  let item = `<li> ${miEntrada.value} <button id=${numeroDeReferencia+1}>Completado</button> </li>\n`;
  numeroDeReferencia ++;
  // let botonDeItem = document.getElementById(`${numeroDeReferencia}`);
  // botonDeItem.addEventListener('click', elimarTarea);
  contenidoDeLista.push(item);

  pintarListaEnHTML();
  localStorage.setItem('ListaDeTareas', listaEnString);

  let longitudDeLaLista = miLista.children.length;

  for (let i = 0; i < longitudDeLaLista; i++) {
    let ele = miLista.children.item(i)
    console.log('ELEMENTO', ele);
  }
}

function pintarListaEnHTML () {
  listaEnString = contenidoDeLista.join('')
  miLista.innerHTML = listaEnString;
}

function elimarTarea() {
  console.log('ELIMINAR LA TAREA');
}



// scope es el alcance que tiene mis variables y funciones

// global scoper
/*
  let, const o var que se encuentran hasta el tope del documento
*/
// function scope
/*
var a = 'adios';

function scopeDeFuncion () {
  var a = 'hola';
  
  console.log(a); //hola
}
console.log(a); //adios
*/

// block scope
/*
function scopeDeBloke() {

  if (true) {
    let nivelBloque = 'Estoy dentro'; 
  }

  // console.log(nivelBloque) //Estoy fuera
}
*/