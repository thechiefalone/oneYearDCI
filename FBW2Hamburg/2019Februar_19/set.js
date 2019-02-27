let animals = new Set();
animals.add("pig");
animals.add("horse");
animals.add("cat");
console.log(animals);
console.log(animals.size);
animals.add("lion");
console.log(animals);
console.log(animals.size);
console.log(animals.has("big"));
console.log(animals.has("pig"));
console.log(animals.delete("pig"));
console.log(animals);
console.log(animals.size);

//fetching

animals.forEach(animal => {
    console.log(animal);
});

let fruits = ["apple", "orange", "banana", "kiwi"];

fruits.forEach(item => {
    console.log(item);
});

