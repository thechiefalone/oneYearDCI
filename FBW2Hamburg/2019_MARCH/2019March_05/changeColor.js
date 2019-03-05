window.onload=function(){
let btn = document.getElementById("button");
let div = document.getElementById("myDiv");

btn.addEventListener("click", function (event) {
 var red = Math.floor(Math.random() * 255);
 var blue = Math.floor(Math.random() * 255);
 var green = Math.floor(Math.random() * 255);
console.log(red);
 myDiv.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
});
}