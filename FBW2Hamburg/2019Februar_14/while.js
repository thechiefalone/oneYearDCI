function calculate(n1, n2) {
    if (n1 > n2) {
        while (n1 >= n2) {
            console.log(n1);
            n1 = n1 - 1;
        }
    } else if (n1 < n2) {
        while (n1 <= n2) {
            console.log(n1);
            n1 = n1 + 1;
        }
    } else {
        console.log("they are equal");
    }
}

calculate(5, 3);

console.clear();

function sumAll(min, max) {
    return ((max - min) + 1) * (min + max) / 2;
}

console.log(sumAll(1, 5));

console.clear();

function sumAll(arr) {

    var sum = 0;
    var min;
    var max;


    if (arr[0] < arr[1]) {
        min = arr[0];
        max = arr[1];
    } else {
        min = arr[1];
        max = arr[0];
    }

    for (var i = min; i <= max; i++) {

        sum += i;
    }


    return sum;
}

console.log(sumAll([1, 4]));

console.clear();

function counter(n1, n2) {
    let sum = 0;
    let karrar = n1;
    if (n1 <= n2) {

        while (karrar <= n2) {
            sum = sum + karrar;
            karrar = karrar + 1;
        }
    } else {


        while (karrar >= n2) {
            sum = sum + karrar;
            karrar = karrar - 1;
        }

    }
    console.log(sum);

}
counter(5, 1);