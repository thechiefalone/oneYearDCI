var apiKey = "12000491-41fc68d8c365df909e022ceb6";
var perPageValue;
var img;


function buttonClick() {
    var keyword = document.getElementById("search").value;
    var category = document.getElementById("category").value;
    var perPageValue = document.getElementById("per-page").value;

    fetch("https://pixabay.com/api/?key=" + apiKey + "&q=" + keyword + "&image_type=photo&category=" + category + "&pretty=true&per_page=" + perPageValue).
    then(function (response) {
        if (response.status !== 200) {
            return;
        }
        response.json().then(function (data) {
            // getImage(data);
            var div = document.getElementById("img-container");
            div.innerHTML = "";
            for (let i = 0; i < perPageValue; i++) {
                let img = document.createElement("img");
                img.src = data.hits[i].largeImageURL;
                div.appendChild(img);
            }
        })
    });
}

// function next() {
//     var keyword = document.getElementById("search").value;
//     var category = document.getElementById("category").value;
//     var perPageValue = document.getElementById("per-page").value;

//     fetch("https://pixabay.com/api/?key=" + apiKey + "&q=" + keyword + "&image_type=photo&category=" + category + "&pretty=true&per_page=" + perPageValue + "page=2").
//     then(function (response) {
//         if (response.status !== 200) {
//             return;
//         }
//         response.json().then(function (data) {
//             getImage(data)
//         })
//     });
// }

// function getImage(anyData) {
//     var div = document.getElementById("img-container");
//     div.innerHTML = "";
//     for (let i = 0; i < perPageValue; i++) {
//         let img = document.createElement("img");
//         img.src = anyData.hits[i].largeImageURL;
//         div.appendChild(img);
//     }
// }