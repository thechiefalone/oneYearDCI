window.onload = function () {
    let images = document.getElementsByTagName("img");
    let button = document.getElementById("btn");
    let counter = 0;
    button.addEventListener("click", function (event) {
        counter++;
        images[counter].style.top = 0;
        images[counter].style.left = 0;

        if (counter == images.length-1) {
            return;
            alert("Images Finished");
        }

    });
}