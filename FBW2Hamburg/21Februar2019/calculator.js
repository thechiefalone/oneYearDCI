class calculator {
    constructor(num1, num2, operator) {
        this.number1 = num1;
        this.number2 = num2;
        this.operator = operator;
        this.plusFunction = function () {
                if (this.operator == "+") {
                    return this.number1 + this.number2;
                }
            },
            this.minusFunction = function () {
                if (this.operator == "-") {
                    return this.number1 - this.number2;
                }
            },
            this.multipleFunction = function () {
                if (this.operator == "*") {
                    return this.number1 * this.number2;
                }
            },
            this.divideFunction = function () {
                if (this.operator == "/") {
                    return this.number1 / this.number2;
                }
            };
    }
}

let plus = new calculator(10, 5, "+");
console.log(plus.plusFunction());

let minus = new calculator(10, 5, "-");
console.log(minus.minusFunction());

let multiple = new calculator(10, 5, "*");
console.log(multiple.multipleFunction());

let divide = new calculator(10, 5, "/");
console.log(divide.divideFunction());


//Second Solution

function calc(op, n1, n2) {
    switch (op) {
        case "+":
            return n1 + n2;
            break;

        case "-":
            return n1 - n2;

            break;

        case "*":
            return n1 * n2;

            break;

        case "/":
            return n1 / n2;

            break;

        case "^":
            return Math.pow(n1, n2);

            break;

        default:
            return "This Operation is not Supported";
            break;
    }
}

console.log(calc("^", 3, 2));

let isGreater = 4 > 1;

console.log( isGreater );