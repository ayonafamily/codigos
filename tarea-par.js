/*1. Desarrolla una función que puntúe una mano de cartas, que tenga como parámetro un array de cartas,
cada una representada por un diccionario con palo y valor. Al puntuar, las cartas suman su valor excepto
si es un as que suma 20. Prueba a invocarla con varias manos de cartas con y sin ases.
2. Partiendo de la función anterior, modíficala para que además las cartas rojas sumen el doble.
Prueba a invocarla con varias manos de cartas.
3. Desarrolla un programa que use la función anterior para puntuar las manos de cartas de dos jugadores
e imprima por consola al ganador, es decir, al que obtenga mayor puntuación.    */
var cartas = [{
palo: "c",
valor: 3
}, {
palo: "t",
valor: 8
}, {
palo: "p",
valor: 1
}, {
palo: "p",
valor: 5
}, {
palo: "d",
valor: 6
}]
function puntua() {
total = 0;
for (i = 0; i < cartas.length; i++) {
total = total + cartas.valor[i];
console.log(total);
}
}
//---------------------------------------------------------------------
var nombres = [];
var n1 = prompt("Ingresa el 1ro");
var n2 = prompt("Ingresa el 2do");
var n3 = prompt("Ingresa el 3ro");
var nombres = [n1, n2, n3]
alert(nombres);
alert(nombres[2]);
//--------------------------------------------------------------------------
var amigos = ["Lucho", "Napo", "Miguel", "Roberto", "Flavio"];
for (var i = 0; i < 5; i++) {
console.log(amigos[i])
}
//----------------------------------------------------------------
/*Función que lista los 52 palos de la baraja dividos por palo   */
function lista() {
var palos = ["c", "t", "p", "d"];
for (i = 0; i < palos.length; i++) {
for (j = 1; j < 14; j++) {
console.log(palos[i] + j);
}
}
}
//--------------------------------------------------------------------
croupier = {};
var cartas = [{
palo: "c",
valor: 5
},
palo: "t", valor: 2
];
/* Inseción de un valor en un array */
var cartas = ["5d", "3t", "2c", "12c"];
var resultado = [];
for (var i = 0; i < cartas.length; i++) {
resultado[resultado.length] = cartas[i];
if (cartas[i] === "3t") {
resultado[resultado.length] = "1c";
}
}
// Encontrar  un elemento en un array. En este caso: Barajas rojas
var cartas = ["5d", "3t", "2c", "12c"];
var resultado = [];
for (i = 0; i < cartas.length; i++) {
if (cartas[i][1] === "d" || cartas[i][1] === "c") {
resultado = cartas[i];
console.log(resultado);
}
}
//Búsqueda en array
var cartas = ["5d", "3t", "2c", "12c"];
var resultado = [];
for (i = 0; i < cartas.length; i++) {
if (cartas[i] === "2c") {
encontrado = true;
resultado = [cartas[i]]
console.log(encontrado + " " + resultado)
}
}
/*llamada a una función */
function puntua(mano = [10, 9, 8, 7, 8]) {
var total = 0;
for(var i=0;i<mano.length;i++){
total=total+mano[i];
}
console.log(total);
}
/*Examen objetos*/
//pregunta 1 corregida
var croupier = {};
croupier.baraja = [{palo:"c",valor:1},{palo:"c",valor:2}];
croupier.barajar = function(){
	croupier.baraja.reverse();
	console.log(croupier.baraja[0].valor)
}
//PRegunta 2
croupier.baraja = [{palo:"c",valor:1},{palo:"c",valor:2}];
croupier.barajar = function(){
	this.baraja.reverse();
	this.baraja.reverse();
	console.log(croupier.baraja[0].valor)
}

// Pregunta 3
croupier.baraja = [{palo:"c",valor:1},{palo:"c",valor:2}];
croupier.barajar = function(){
	this.baraja.reverse();
	console.log(croupier.baraja[0].valor)
}
// Pregunta 4
var croupier = {};
croupier.AS = 10;
croupier.puntuar = function(mano){
	var resultado = 0;
	for(var i=0;i<mano.length;i++){
		if(mano[i].valor === 1){
			resultado = resultado + this.AS;
		}else{
			resultado =resultado + mano[i].valor;
		}
	}
	return resultado;
}
 var total = croupier.puntuar([{palo:"c",valor:1},{palo:"d",valor:1},{palo:"p",valor:1},{palo:"t",valor:1}]);
 console.log(total);