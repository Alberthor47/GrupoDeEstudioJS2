const miBoton = document.getElementById('boton')
miBoton.addEventListener('click', avisarCuandoSeHagaClick)

const miEntrada = document.getElementById('entrada')

const miLista = document.getElementById('lista')
console.log(miLista)

let contenidoDeLista = [];
let listaEnString;
contenidoDeLista.push(localStorage.getItem('ListaDeTareas'));
pintarListaEnHTML();

// Esto es un comentario del hoisting
function avisarCuandoSeHagaClick() {
  let item = `<li> ${miEntrada.value} </li>\n`;
  contenidoDeLista.push(item);

  pintarListaEnHTML();
  localStorage.setItem('ListaDeTareas', listaEnString);
}

function pintarListaEnHTML () {
  listaEnString = contenidoDeLista.join('')
  miLista.innerHTML = listaEnString;
}