let var1="55"+55;
typeof var1;
console.log(typeof(var1));

// writing a function

function doubler (num){
    console.log(Math.pow(num,2));
}

doubler(5);

// 

function multipler (num1, num2){
    console.log(num1*num2)
}

multipler(3,0);
multipler(4,9);

// 

function circle (r){
    console.log(Math.PI*Math.pow(r,2));
}

circle(3);

// 

function power(num,powerNum){
    return (num ** powerNum);
}

let someNum=power(5,4);
console.log(someNum);

// 

function adder (num1,num2){
    return (num1+num2);
}

console.log(adder(3,4));

// 

function divider(num1,num2){
    return(num1/num2);
}

console.log (divider(10,5));


