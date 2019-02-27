function foo(num) {
    if (num != 0) {
        console.log(num);
        foo(num - 1);
    }
}

foo(4);

// Factorial with recursion

function factorialize(a) {
    if (a === 0) {
        return 1;
    }
    return a * factorialize(a - 1);
}

console.log(factorialize(4));

// Sum All

function sum(b) {
    if (b === 0) {
        return 0;
    }
    return b + sum(b - 1);
}

console.log(sum(4));