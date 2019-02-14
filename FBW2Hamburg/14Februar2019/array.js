// let arr = [5,3,-3];
// console.log(arr);

// let someVar = [];
// for(i = 0; i <= 1000; i++){
//     someVar.push(i);
// }
// console.log(someVar);

  
// var numbers = [5, 2, 3, 6, 7];
// console.log(Math.max.apply(null, numbers));
// Math.min.apply(null, numbers); 

// console.clear();

// var array = [5,2,3,6,7];
// var largest = 0 ;

// for (i=0; i<=largest;i++){
//     if (array[i]>largest) {
//         var largest=array[i];
//     }
// }

// console.log(largest);


// var array = [-5,-2,-3,-6,-7];
// var largest = array[0] ;

// for (let i=1; i<array.length;i++){
//     if (array[i]>largest) {
//         var largest=array[i];
//     }
// }

// console.log(largest);



var array = [-72, -3, -17, 5];
var lg = array[0];
var sm = array[0];
for (var i = 1; i < array.length; i++) {
    if (array[i] > lg) {
        lg = array[i];
    }  else if(array[i] < sm) {
        sm = array[i];
    }
}
console.log('largest number :' + lg);
console.log('smallest number :' + sm);