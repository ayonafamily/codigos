/*
 * Este es un borrador de JavaScript.
 *
 * Ingrese un poco de JavaScript, luego clic derecho o escoja desde el menú Ejecutar:
 * 1. Ejecutar para evaluar el texto seleccionado (Ctrl+R),
 * 2. Inspeccionar para traer un Inspector de objetos en el resultado (Ctrl+I), o,
 * 3. Mostrar para insertar el resultado en un comentario después de la selección. (Ctrl+L)
 */

var palos =["c","p","t","d"]
for(var i=0; i<palos.length;i++){
  for(var j=1;j<=12;j++){
    console.log("Carta: "+j+palos[i]);
  }
}

var as ={palo:"c",valor:1};
var rey ={palo:"c",valor:12};
var mano =[as,rey,{palo:"c",valor:11}];
console.log(mano[2].valor);

var palos ={esp:["c","o","e","b"], poker:["c","t","p","d"]}

var fechaHoy = Date.now();
var fechaPasada = Date.parse("01/12/2007");
if(fechaHoy>fechaPasada){
  console.log("Estamos en el futuro");
}else{
  console.log("Estamos en el pasado");
}



var CalculadoraDeAreas ={}
CalculadoraDeAreas.rectangulo = function(ancho,alto){
  return ancho.alto;
}
CalculadoraDeAreas.circulo = function(radio){
  return Math.PI*radio*radio;
}

function hola(){console.log("Hola");}
function adios(){console.log("Adios");}
function adios(){console.log("Adios");}

//----------------------------------

var croupier = {};

croupier.baraja = [{palo:"c",valor:1},{palo:"c",valor:2}];
croupier.barajar = function(){this.baraja.reverse();this.baraja.reverse();console.log(baraja[0].valor);}
//----------------------------------------
var croupier = {};

croupier.baraja = [{palo:"c",valor:1},{palo:"c",valor:2}];
croupier.barajar = function(){baraja.reverse();console.log(baraja[0].valor);}


