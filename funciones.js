/*
 * Este es un borrador de JavaScript.
 *
 * Ingrese un poco de JavaScript, luego clic derecho o escoja desde el menú Ejecutar:
 * 1. Ejecutar para evaluar el texto seleccionado (Ctrl+R),
 * 2. Inspeccionar para traer un Inspector de objetos en el resultado (Ctrl+I), o,
 * 3. Mostrar para insertar el resultado en un comentario después de la selección. (Ctrl+L)
 */

function puntua(mano){
  var total = 0;
  for(var i=0;i<mano.length;i++){
    total = total + mano[i].valor;
  }
  return total
}
var total =puntua([{palo:"c", valor:1}]);


var total = 0;
for(var i=0;i<mano.length;i++){
  total = total + mano[i].valor;
}
return total
}

function programa(){
  var primeraMano =[{palo:"d", valor:1},{palo:"p",valor:5}];
  var segundaMano =[{palo:"t",valor:12}, {palo:"t",valor:1}];
  var resultado = 0;
  resultado = puntua(primeraMano);
 resultado = puntua(segundaMano);
  console.log(resultado);
}

function puntua(mano){
  var total = 0;
for(var i=0;i<mano.length;i++){
  total = total + mano[i].valor;
}
return total
}

function programa(){
  var primeraMano =[{palo:"d", valor:1},{palo:"p",valor:5}];
  var segundaMano =[{palo:"t",valor:12}, {palo:"t",valor:1}];
  var resultado = 0;
  resultado = puntua(primeraMano);
 resultado = puntua(segundaMano);
  console.log(resultado);
}

function puntua(mano){
  var total = 0;
  for(var i=0;i<mano.length;i++){
    total = total + mano[i].valor;
  }
  return total;
}

var primeraMano = puntua([{palo:"c",valor:1}])
var mano = [{palo:"d",valor:1}];
var segundaMano = puntua(mano);
console.log(primeraMano - segundaMano);

function puntua(mano){
  var total = 0;
for(var i=0;i<mano.length;i++){
  total = total + mano[i].valor;
}
return total
}

var resultado = puntua([{palo:"c",valor:1}]);
console.log(total);

/*Otro */
function puntua(mano){
  var total = 0;
for(var i=0;i<mano.length;i++){
  total = total + mano[i].valor;
}
return total
}

function programa(){
  var primeraMano =[{palo:"d", valor:1},{palo:"p",valor:5}];
  var segundaMano =[{palo:"t",valor:12}, {palo:"t",valor:1}];
  var gaandor = 1;
  if(puntua(primeraMano)<= puntua(segundaMano)){
    ganador =2;
  }
  console.log(ganador);
}