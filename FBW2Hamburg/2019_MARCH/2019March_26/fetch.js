var apiKey = "12000491-41fc68d8c365df909e022ceb6";
var img;
var imgColumn;
var imgSlide;

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
    for (var i=1;i<5;i++){
        var img = document.getElementById("img-container"+i);
        var imgColumn = document.getElementById("img-container-col"+i);
        var imgSlide = document.getElementById("img-container-slide"+i);
        img.src = anything.hits[i].largeImageURL;
        imgColumn.src = anything.hits[i].largeImageURL;
        imgSlide.src = anything.hits[i].largeImageURL;


    }
}

function openModal() {
    document.getElementById('myModal').style.display = "block";
  }

  function closeModal() {
    document.getElementById('myModal').style.display = "none";
  }

  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }