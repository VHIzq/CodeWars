
function getCount(str) {
  
  let vowelsCount = 0;
  const vowelArr = str.split("");
  for(let i = 0; i < vowelArr.length; i++){
    switch(vowelArr[i]){
      case "a":
        vowelsCount++
        break;
      case "e":
        vowelsCount++;
        break;
      case "i":
        vowelsCount++;
        break;
      case "o":
        vowelsCount++;
        break;
      case "u":
        vowelsCount++;
        break;
    }
  }
  
  return vowelsCount;
}
console.log(getCount("catdog"));


function getVowelsNumber(str){
  const vowels = ["a", "e", "i", "o", "u"];
  return [...str].filter(letter => {
    return vowels.includes(letter) ? true : false;
  }).length;
}

console.log(getVowelsNumber("catdog"));