window.onload = function () {
    let images = document.getElementsByTagName("img");
    let leftArrow = document.getElementsByClassName("left")[0];
    let rightArrow = document.getElementsByClassName("right")[0];
    let currentImage = 0;
    rightArrow.addEventListener("click", function (event) {
        currentImage++;
        if (currentImage == images.length) {
            currentImage = 0;
            // location.reload();
        }
        for (let i = 0; i < images.length; i++) {
            images[i].style.transform = "translateX(" + currentImage * (-50) + "vw)";
        }
    });

    leftArrow.addEventListener("click", function () {
        currentImage--;
        if (currentImage < 0) {
            currentImage = images.length - 1;
            // location.reload();
        }
        for (let i = 0; i < images.length; i++) {
            images[i].style.transform = "translateX(" + currentImage * (-50) + "vw)";
        }
    });
}