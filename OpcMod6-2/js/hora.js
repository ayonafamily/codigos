/*
* Este es un borrador de JavaScript.
*
* Ingrese un poco de JavaScript, luego clic derecho o escoja desde el menú Ejecutar:
* 1. Ejecutar para evaluar el texto seleccionado (Ctrl+R),
* 2. Inspeccionar para traer un Inspector de objetos en el resultado (Ctrl+I), o,
* 3. Mostrar para insertar el resultado en un comentario después de la selección. (Ctrl+L)
*/
function fecha(){
var f = new Date();
hora = f.getHours();
minu = f.getMinutes();
seg = f.getSeconds();
if (hora>18)
{ p="¡buenas noches!. Son las: "}
else if (hora> 6)
{ p="buenos días. Son las: "   }
alert(p+"\n"+"\t"+hora + ":"+minu+ ":"+ seg);

}
fecha();
setInterval("fecha();",1000);