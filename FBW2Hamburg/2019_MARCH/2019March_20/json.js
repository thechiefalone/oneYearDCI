//json: javascript object notation
let obj={
    fname:"Ahmad",
    lname:"Osman",
    age:33,
    single:false,
    kids:["ali","omar"]
};
console.log(obj);

console.log(JSON.stringify(obj));

console.log(JSON.parse('{"fname":"Ahmad","lname":"Osman","age":33,"single":false}'));

let jsonObj = JSON.stringify(obj);

console.log(JSON.parse(jsonObj));
console.log(JSON.parse(jsonObj).kids[0]);