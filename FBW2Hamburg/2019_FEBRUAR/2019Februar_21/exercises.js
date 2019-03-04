// for (let i = 1; i <= 100; i++) {

//     console.log(Math.pow(i, 2));
// }

// let m = 1;
// while (m <= 100) {
//     console.log(Math.pow(m, 2));
//     m++;
// }


function primNum(num) {

    for (let j = 2; j < num; j++) {
        if (num % j == 0) {
            return false;
        }

    }


    return true;
}

console.log(primNum(17));

for (let h = 1; h < 100; h++) {
    if (primNum(h)) {
        console.log(h);
    }
}