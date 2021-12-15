
function lastItem(profile){
  profile = ["Oluwatobi", "Sofela", "codesweetly.com"];
  newProfile = [...profile];
  const getLastItem = newProfile.pop();
  console.log(getLastItem);
}
lastItem();

/* const profile = ["Oluwatobi", "Sofela", "codesweetly.com"];

const [firstName, lastName, website] = profile;
console.log(profile); */


/* const ingredients = ["chocolate", "egg", "milk", "salt"];
const [base, mixer, liquid, flavor] = ingredients;
console.log(base);
console.log(liquid);
console.log(ingredients); */

const [base, mixer, liquid, flavor] = ["chocolate", "egg", "milk", "salt"];
console.log(base);
console.log(flavor)



const [firstName, lastName, website] = [
  "Oluwatobi", 
  "Sofela", 
  "codesweetly.com"
];
console.log(website);


const numeros = [2,3,4,5];
const factores = [5,4,3,2];

function multiplicaciones (array1, array2){
  return array1.map( numero1 => {
    return array2.map(numero2 => {
      return numero1 * numero2;
    })
  })
}
console.log(multiplicaciones(numeros, factores));

const multiply = (numA, numB ) => numA * numB;
console.log(multiply(3,4))