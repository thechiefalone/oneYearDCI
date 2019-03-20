function first() {
    setTimeout(foo, 1000)
}

function foo() {
    console.log(1);
    second();
}

function second() {
    console.log(2);
}

function buttonClick() {
    first(second);
}