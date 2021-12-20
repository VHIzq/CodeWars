/* 
Una pila de llamadas en su nivel más básico es una
estructura de datos tipo Last In, First Out (LiFo) . 
Significa que la ultima función en entrar a la pila, es la
primera en salir de la pila cuando la función regresa

Manage Function Invocation

Cuando se invaca una función se asigna los parámetros y variables 
en el marco de pila (stack frame) en un espacio de memoria termporal.

La pilla de llamadas mantiene un registro de cada marco de pila, por lo que conoce qué
función seguirá en el contexto de ejecución. And this let to JS be synchonic. 
*/

function primerFuncion(){
  //aquí se aplica LiFO
  console.log("Soy la cabeza")
}
function segundaFuncion(){
  primerFuncion();
  console.log("Soy la cola")
}
segundaFuncion();

/* 
Cuando segundaFuncion se invoca, se inserta a la pila, se crea un marco de pila vacio
 y llama a primerFuncion y se inserta a la pila. Entonces se crea un marco de pila,
se imprime el clg y sale de la pila. El control regresa a segundaFuncion
donde resuelve el clg y sale de la pila. Al final, los marcos de pila
se borran.
*/