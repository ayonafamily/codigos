/*1. Desarrolla una función que puntúe una mano de cartas, que tenga como parámetro un array de cartas, 
cada una representada por un diccionario con palo y valor. Al puntuar, las cartas suman su valor excepto 
si es un as que suma 20. Prueba a invocarla con varias manos de cartas con y sin ases.
2. Partiendo de la función anterior, modíficala para que además las cartas rojas sumen el doble.
 Prueba a invocarla con varias manos de cartas.
3. Desarrolla un programa que use la función anterior para puntuar las manos de cartas de dos jugadores 
e imprima por consola al ganador, es decir, al que obtenga mayor puntuación.    */

var cartas = [{palo:"c",valor:3},{palo:"t",valor:8},{palo:"p",valor:1},{palo:"p",valor:5},{palo:"d",valor:6}]
function puntua(cartas) {total= 0;for(i=0;i<cartas.length;i++){total = total + cartas.valor[i];console.log(total)}}