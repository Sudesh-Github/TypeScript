const k = "new";


let s = 1 ;
if(s==0){

  console.log(s);

}


console.log(s);

 console.log(k);

 var order = {
     id: 200,
     title: "JS",
     price: 350,
     getPrice : function () { },
     printOrder : function () { }
 };
 order.getPrice = function () {
     console.log("Price is " + order.price);
 };
 order.getPrice();

 order.printOrder = function () {
     console.log(" ID is " + order.id + " Title is " + order.title + " Price is " + order.price);
 };
 order.printOrder();

 const names = () => console.log(("Tom").length)
   console.log("Tom") ;
  names();


  var uname = 'Tom'
  console.log(uname);
  console.log("Length of " + uname + " is " + uname.length);
