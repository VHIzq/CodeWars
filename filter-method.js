//Usando el método map
//Multiplica por dos cada elemento del arreglo: 

let numeros = [3, 4, 5, 6, 7, 8, 13, 14, 21];
let fatoresDeTres = numeros.filter( (factor) => {
  return factor % 3 === 0;
});
console.log(fatoresDeTres);

function mayorDeEdad(edades){
  let edadMayoría = edades.filter( (edad) => {
    return edad >= 18
  } )
  console.log(edadMayoría);
}
mayorDeEdad([21, 27, 17, 45, 56, 55, 75]);

function factoresDeNumero(numeros, factor){
  let factoresDeNumero = numeros.filter((numero) => {
    return numero % factor === 0;
  })
  console.log(factoresDeNumero);
}
factoresDeNumero([3,4,5,6,7,8,9,12,5,17], 3);


function piedritasEnElArroz (arroz, piedrita){
  let arrozEscogido = arroz.filter((arroz) => {
    return arroz == piedrita;
  })
  console.log(arrozEscogido);
}
piedritasEnElArroz([1, 3, 56, 12, 1, 3, 6, ,4, 11, 12, 3],1);





