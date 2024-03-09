let numeroSecreto = 0;
let intentos = 0;
let numerosJugados = [];

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function condicionesIniciales() {
  intentos = 0;
  asignarTextoElemento("h1", "Juego del número secreto!");
  asignarTextoElemento("p", `Indica un número del 1 al 10`);
  document.getElementById("intentar").removeAttribute("disabled");
  document.getElementById("reiniciar").setAttribute("disabled", "");
  vaciarCajon();
  numeroSecreto = generarNumeroSecreto();
  
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (document.getElementById("valorUsuario").value.length != 0) {
    intentos++;

    if (numeroDeUsuario === numeroSecreto) {
      asignarTextoElemento(
        "p",
        `Acertaste el numero Secreto en ${intentos} intentos`
      );

      document.getElementById("reiniciar").removeAttribute("disabled");
      document.getElementById("intentar").setAttribute("disabled", "");
    } else {
      if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento("p", "El numero Secreto es Menor");
      } else {
        asignarTextoElemento("p", "El numero Secreto es Mayor");
      }
      vaciarCajon();
    }
    return;
  }
}

function reiniciarJuego() {
  condicionesIniciales();
}

function vaciarCajon() {
  document.getElementById("valorUsuario").value = "";
  return;
}

function generarNumeroSecreto() {
  let numeroGenerado = parseInt(Math.floor(Math.random() * 10) + 1);

  if (numerosJugados.length === 10) {
    asignarTextoElemento("p", "Se ha jugado con todos los numeros disponibles");
    document.getElementById("intentar").setAttribute("disabled", "");
  } else {
    if (numerosJugados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      numerosJugados.push(numeroGenerado);
      console.log(numeroGenerado);
      return numeroGenerado;
    }
  }
}



condicionesIniciales();
