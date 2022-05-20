
var a,b;
function add(a=10,b=5){

console.log(a+b);
}

function userFriends(username,...arg){
   console.log("Name " + username)
   console.log("Friends ")
   for(var i in arg)
   {
     console.log( arg[i]);
   }

}
userFriends("John","Mickey","Ninja","Steve");


function printCapNames(name1,name2){
  console.log(name1.toUpperCase() + " " + name2.toUpperCase());
}

printCapNames("john","david");

let a1 = 5;
let b1 = 10;
console.log(`Fifteen is ${a1 + b1} and
not ${2 * a1 + b1}.`);

let students = ['bud', 'syren', 'lucy','amelia'];
let [first, second, third, fourth] = students;


console.log(third); 

