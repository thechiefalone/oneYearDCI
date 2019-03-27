var apiKey = "12000491-41fc68d8c365df909e022ceb6";
var perPageValue;
var img;
var counter = 2;

function buttonClick() {
    var keyword = document.getElementById("search").value;
    var category = document.getElementById("category").value;
    perPageValue = document.getElementById("per-page").value;

    fetch("https://pixabay.com/api/?key=" + apiKey + "&q=" + keyword + "&image_type=photo&category=" + category + "&pretty=true&per_page=" + perPageValue).
    then(function (response) {
        if (response.status !== 200) {
            return;
        }
        response.json().then(function (data) {
            getImage(data);
        })
    });
}

function next() {
    var keyword = document.getElementById("search").value;
    var category = document.getElementById("category").value;
    perPageValue = document.getElementById("per-page").value;
    fetch("https://pixabay.com/api/?key=" + apiKey + "&q=" + keyword + "&image_type=photo&category=" + category + "&pretty=true&per_page=" + perPageValue + "&page=" + counter).
    then(function (response) {
        if (response.status !== 200) {
            return;
        }
        response.json().then(function (data) {
            getImage(data)
            console.log(data);
        })
    });
    counter++;
}

function getImage(anyData) {
    var div = document.getElementById("img-container");
    div.innerHTML = "";
    for (let i = 0; i < perPageValue; i++) {
        img = document.createElement("img");
        div.appendChild(img);
        img.src = anyData.hits[i].largeImageURL;
        img.setAttribute("class","images");
        img.setAttribute("onclick","imgClickOpen(this)");
    }
}

function imgClickOpen(img) {
    img.setAttribute("class","zoom-out");
}

// function imgClickClose(img){
//     img.setAttribute("class","zoom-out");

// }