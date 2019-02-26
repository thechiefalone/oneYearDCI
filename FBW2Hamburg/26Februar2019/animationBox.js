window.onload = function () {
    let small = document.getElementById("smallBox");
    let pos = 1;
    var flag = true;
    console.log(pos);

    setInterval(function () {
        if (flag) {
            pos++;
        }
        else {
            pos--;
        }
        if (pos === 288) flag = false;
        if (pos === 1) flag = true;

        small.style.l1eft = pos + "px";
        console.log(pos);
    }, 5);

};