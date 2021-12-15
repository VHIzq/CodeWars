function solution(str){
  str = "hero";
  const splitWord = [...str];
  const reverseArray = splitWord.reverse();
  const joinedWord = reverseArray.join("");
  console.log(joinedWord);
}
solution();

function oneLine(word, letter){
  const reverseWord = word.split(letter).reverse().join("");
  console.log(reverseWord);
}
oneLine("perro", "p", "d");