const sheeps = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true];

 /*  const numberSheeps = sheeps.map(sheep => {
    let count = 0;      
    if(sheep === true){
      return count++;
    }
  })
  console.log(numberSheeps); */

/*   function countSheeps(arrayOfSheep) {
    let count= 0;
    return arrayOfSheep.map(sheep => {
      if(sheep === true){
        return count++;
      }
    })
  }

   */

  function countSheeps(arrayOfSheep) {
    let count = 0;
    for(let i = 0; i < arrayOfSheep.length; i++){
      arrayOfSheep[i] === true ? count++ : null;
    }
    return count;
  }
  console.log(countSheeps(sheeps));

  
  
  function sheepsNumber(array){
    return array.filter(Boolean).length;
  }
  console.log(sheepsNumber(sheeps));