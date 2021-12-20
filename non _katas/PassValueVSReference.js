
let a = {num: 1};
let change = function(val){
  val.num = 2;
}

change(a);

console.log(a);


let r = {num: 1}
let t = r;
r = {}

console.log(r)
console.log(t)