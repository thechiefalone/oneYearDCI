for (let i = 0; i < 10; i += 2) {
    console.log(i);
}

for (let x = 10; x > 0; x = x - 2) {
    console.log(x);
}

for (let j = 0; j <= 10; j++) {
    for (let k = 0; k <= 10; k++) {
        console.log("hi");
    }
}

for (let a = 1; a <= 10; a++) {
    for (let b = 1; b <= 10; b++) {
        console.log(a + " x " + b + " = " + a * b);
    }
    console.log("new line");
}

for (let h = 0; h < 10; h++) {
    let virtLine = "";
    for (let y = 0; y < 10; y++) {
        virtLine += "*";

    }
    console.log(virtLine + h);

}
for (let c = 0; c < 10; c++) {
    let line = "";
    for (let d = 0; d < 10; d++) {
        line += "*";
        console.log(line);

    }
}

console.clear();

let starStorage="";
for (let i = 0; i < 10; i++) {
    starStorage = starStorage+"*";
}
console.log(starStorage);

let storage="";
for (let i = 0; i < 10; i++) {
    storage = storage+"*";
    console.log(storage);
}

let data="**********";
for (let i = 10; i > 0; i--) {
    data = data.substr(0,i);
    console.log(data);
}


































