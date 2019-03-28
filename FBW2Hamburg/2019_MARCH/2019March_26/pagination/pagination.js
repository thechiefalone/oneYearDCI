var apiKey = "12000491-41fc68d8c365df909e022ceb6";
var perPageValue;
var img;
var counter = 1;

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
    counter++;

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
}

function back() {
    if (counter > 1) {
        counter--;
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
    }
}

function getImage(anyData) {
    var div = document.getElementById("img-container");
    div.innerHTML = "";
    for (let i = 0; i < perPageValue; i++) {
        img = document.createElement("img");
        a = document.createElement("a");
        div.appendChild(a);
        a.appendChild(img);
        a.setAttribute("href", anyData.hits[i].largeImageURL);
        a.setAttribute("data-lightbox", "mygallery");
        img.src = anyData.hits[i].largeImageURL;
        img.setAttribute("class", "images");
    }
}