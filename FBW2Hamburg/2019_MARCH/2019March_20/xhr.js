//xhr : xml http request
//api: Application programming interface
window.onload=function (){
    setInterval(() => {
        getDog()
    }, 1000);
    document.getElementById("img1").style=("width:400px; height:400px; border:1px solid black;");
}

function getDog() {
    let req = new XMLHttpRequest();
    req.open("GET","https://dog.ceo/api/breeds/image/random");
    req.send();
    req.onload=function(){
        let jsonObj = req.responseText;
        let imgJson = JSON.parse(jsonObj);
        console.log(imgJson.message)
        document.getElementById("img1").src=imgJson.message;
    }
}