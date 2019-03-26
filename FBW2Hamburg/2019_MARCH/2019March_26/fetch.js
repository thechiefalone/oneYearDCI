var apiKey = "12000491-41fc68d8c365df909e022ceb6";

function buttonClick(){
    var keyword = document.getElementById("search").value;
    var category = document.getElementById("category").value;

    fetch("https://pixabay.com/api/?key="+apiKey+"&q="+keyword+"&image_type=photo&category="+category+"&pretty=true").
    then(function (response) {
        console.log(response.status);
        if (response.status !== 200) {
            return;
        }
        response.json().then(function (data) {
            getImage(data);
        })
    });
}

function getImage(anything){
    console.log(anything);
    for (let i=1;i<7;i++){
        let img = document.getElementById("img-container"+i);
        img.src = anything.hits[i].largeImageURL;
    }
}