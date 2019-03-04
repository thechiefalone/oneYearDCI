let array = new Set([1, 2, 3, 4, 5, 7, 9]);

console.log(array.has(8));

array.forEach(num => {
    console.log(num);
});

console.log("new line");

for (let num of array) {
    console.log(num);
}

console.log("new line");

let items = array.values();
console.log(items.next());
console.log(items.next());
console.log(items.next());
console.log(items.next());
console.log(items.next());
console.log(items.next());
console.log(items.next());
console.log(items.next());

console.log("new line");

console.clear();

// let dictionary = new Map([
//    [key,value]
// ]);
let dictionary = new Map([
    ["dog", "hund"],
    ["table", "tisch"],
    ["cold", "kalt"],
    ["new", "neu"]
]);

console.log(dictionary.get("dog"));

dictionary.set("animal","tiere");

console.log(dictionary);

console.log(dictionary.size);

dictionary.set("1","999");

console.log(dictionary);

dictionary.delete("1");

console.log(dictionary);




