let someString="Hello I am alperen ozkan";
let stringArray=someString.split(" ");

console.log(stringArray);

//

let num1 = "55";
let num2 = "66";
console.log(num1+num2);
console.log(parseInt(num1)+parseInt(num2));

let num3 = "55.27";
let num4 = "66.25";
console.log(parseFloat(num3)+parseFloat(num4));

let num5 = "    10    ";
console.log(parseInt(num5));

let num6 = "    10.22    ";
console.log(Number(num6));

let date = new Date();
console.log(date);

let date1 = new Date("2018");
console.log(date1);

let date2 = new Date("1984.10.04");
console.log(date2.toLocaleDateString());
