/**
 * Cambia el contenido de la etiqueta h1 con document.querySelector
 * y asigna el siguiente texto: "Hora del Desafío".
 */

let titulo = document.querySelector('h1');
    titulo.innerHTML = 'Hora del Desafío';

/**
 * Crea una función que muestre en la consola el mensaje
 * "El botón fue clicado" siempre que se presione el botón "Console".
 */

function consola(){
    console.log("El botón fue clicado");
}

/**
 * Crea una función que se ejecute cuando se haga clic en el botón "prompt",
 *  preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta
 *  con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} 
 * y me acordé de ti".
 */

function promp(){
    let nombreCiudad = prompt('Dime un nombre de una ciudad de Brazil')
    alert(`Estuve en ${nombreCiudad} y me acorde de ti`);
}

/**
 * Crea una función que muestre una alerta con el mensaje:
 *  "Yo amo JS" siempre que se presione el botón "Alerta".
 */
function alertt(){
    alert('Yo amo JS')
}

/**
 * Al hacer clic en el botón "suma", pide 2 números y
 * muestra el resultado de la suma en una alerta.
 */

function suma() {
   let n1 = parseInt(prompt("Dame el numero 1"))
   let n2 = parseInt(prompt("Dame el numero 2"))
    let resultado = n1+n2
    alert('La suma es: ' + resultado )
}