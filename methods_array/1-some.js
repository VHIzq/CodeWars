const fruits = ["kiwi", "watermelon", "pinneaple"];

function isFruit(data){
  return data.some(el => el === "kiwi");
}
console.log(isFruit(fruits));


const vegetables = ["lemon", "pepper", "carrot"];
function isVegetable (data){
  return data.includes("lemon");
}
console.log(isVegetable(vegetables));




