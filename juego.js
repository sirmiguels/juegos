$(document).ready(function(){

var vpiedra
var vpapel 
var vtijera
var vlagarto 

var vspock 
//EVENTO: En cada click ejecuta jugar(), le pasa el boton seleccionado como argumento y crea un numero con aleatorio()
$('#imgopciones').on('click', 'img', function(){
  var usuario = this,
      maquina = aleatorio(0, 4);
  //console.log(this);
  //console.log(maquina);

  jugar(usuario, maquina);
});

function aleatorio(minimo, maximo)
  {
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );  
    return numero;
  }

//Obtiene como argumentos la opción del usuario y un valor aleatorio.
function jugar(usuario, maquina) {
  var opcionUsuario = usuario.className;

  switch(opcionUsuario)
  {
    case 'piedra': document.getElementById("usuario").innerHTML = "<img src='img/piedra.png'/>"; procesar(maquina, 0); break;
    case 'papel': document.getElementById("usuario").innerHTML = "<img src='img/papel.png'/>"; procesar(maquina, 1); break;
    case 'tijera': document.getElementById("usuario").innerHTML = "<img src='img/tijeras.png'/>"; procesar(maquina, 2); break;
    case 'lagarto': document.getElementById("usuario").innerHTML = "<img src='img/lagarto.png'/>"; procesar(maquina, 3); break;
    case 'spock': document.getElementById("usuario").innerHTML = "<img src='img/esponja.png'/>"; procesar(maquina, 4); break;
  }
}

/* Piedra = 0, Papel = 1, Tijeras = 2, Lagarto = 3, Spock = 4
  Recibe la opciones de usuario y maquina, y las compara para declarar un ganador */
function procesar(opcionMaquina, opcionUsuario) {
  console.log(opcionUsuario+' vs '+opcionMaquina);
  document.getElementById("vs").innerHTML = "<img src='img/vs.png'/>";
  
  switch(opcionMaquina)
  {
    case 0: document.getElementById("maquina").innerHTML = "<img  src='img/piedra.png'/>"; break;
    case 1: document.getElementById("maquina").innerHTML = "<img  src='img/papel.png'/>"; break;
    case 2: document.getElementById("maquina").innerHTML = "<img  src='img/tijeras.png'/>"; break;
    case 3: document.getElementById("maquina").innerHTML = "<img  src='img/lagarto.png'/>"; break;
    case 4: document.getElementById("maquina").innerHTML = "<img  src='img/esponja.png'/>"; break; 
  }
  //Si hay empate ya no procesa.
  if(opcionMaquina == opcionUsuario)
  {
    document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/empate.png'/>"; 
    console.log('Es un empate');
    return true;
  } else {
    switch(opcionUsuario)
    {
      case 0: 
        switch(opcionMaquina)
        {
          case 1: document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/pierdes.png'/>"; break;
          case 2: document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/ganas.png'/>"; break;
          case 3: document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/ganas.png'/>"; break;
          case 4: document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/pierdes.png'/>"; break;
        }
        break;
      case 1:
        switch(opcionMaquina)
        {
          case 0: document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/ganas.png'/>"; break;
          case 2: document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/pierdes.png'/>"; break;
          case 3: document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/pierdes.png'/>"; break;
          case 4: document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/ganas.png'/>"; break;
        }
        break;
      case 2:
        switch(opcionMaquina)
        {
          case 0: document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/pierdes.png'/>"; break;
          case 1: document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/ganas.png'/>"; break;
          case 3: document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/ganas.png'/>"; break;
          case 4: document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/pierdes.png'/>"; break;
        }
        break;
      case 3:
        switch(opcionMaquina)
        {
          case 0: document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/pierdes.png'/>"; break;
          case 1: document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/ganas.png'/>"; break;
          case 2: document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/pierdes.png'/>"; break;
          case 4: document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/ganas.png'/>"; break;
        }
        break;
      case 4:      
        switch(opcionMaquina)
        {
          case 0: document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/ganas.png'/>"; break;
          case 1: document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/pierdes.png'/>"; break;
          case 2: document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/ganas.png'/>"; break;
          case 3: document.getElementById("resultado").innerHTML = "<img class='imgresultado' src='img/pierdes.png'/>"; break;
        }
    }
  }
}

});
