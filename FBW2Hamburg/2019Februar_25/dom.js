window.onload = function () {
    let targetElement = document.getElementById("div1");
    if (targetElement != null) {
        // alert("it works");
        targetElement.setAttribute("style", "background-color:blue; width:100vw; color:white;");
        targetElement.innerText = "i am a text created by JavaScript";
        targetElement.innerHTML = targetElement.innerText + " i am another <b>text</b> created by JavaScript";
    }

    let myLinks = document.getElementsByClassName("links");
    myLinks[0].setAttribute("style", "color:red;");
    myLinks[1].setAttribute("style", "color:black;");


    // let result = document.getElementById("num");
    // for(let i=1;i<=100;i++){
    //     result.innerHTML+=" "+i;
    // }

    let storage = "";
    for (let m = 1; m <= 100; m++) {
        if (m != 100) {
            storage += m + ",";
        } else {
            storage += m;

        }
    }
    document.getElementById("num").innerHTML += storage;





};