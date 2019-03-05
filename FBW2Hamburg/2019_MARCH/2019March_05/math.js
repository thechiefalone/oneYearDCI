window.onload = function () {

    let counter = 0;
    let interval = setInterval(() => {
        counter++;
        document.getElementById("randomNumber").innerHTML = Math.floor((Math.random() * 100));
        if (counter === 100) {
            clearInterval(interval);
        }
    }, 100);
}