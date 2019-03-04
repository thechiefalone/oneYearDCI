function encrypt() {
    var rawtext = document.getElementById("myInput").value;
    var tempText = "";
    for (i = 0; i < rawtext.length; i++) {
        tempText += enc(rawtext[i]);
    }
    document.getElementById("result").innerHTML = tempText;
}
function decrypt() {
    var rawtext = document.getElementById("myInput").value;
    var tempText = "";
    for (i = 0; i < rawtext.length; i++) {
        tempText += dec(rawtext[i]);
    }
    document.getElementById("result").innerHTML = tempText;
}

function enc(x) {
    switch (x) {
        case "a":
            return "c";
            break;
        case "b":
            return "k";
            break;
        case "c":
            return "m";
            break;
        case "d":
            return "l";
            break;
    }
}
function dec(x) {
    switch (x) {
        case "c":
            return "a";
            break;
        case "k":
            return "b";
            break;
        case "m":
            return "c";
            break;
        case "l":
            return "d";
            break;
    }
}