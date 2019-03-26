var getDataPromise = new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    // xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=hamburg&APPID=085e9cd33056f583efc844c7ec4f5f72");
    xhr.open("GET", "https://api.unsplash.com/search/photos?page=1&query=office");
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                // setTimeout(function () {
                    resolve("done");
                // }, 5000);

            } else {
                reject("not done");
            }
        }
    }
});

setTimeout(function(){
getDataPromise.then(function (fromResolve) {
    console.log(fromResolve);
});
getDataPromise.catch(function (fromReject) {
    console.log(fromReject)
});
document.getElementById("container").innerHTML="<h1>Hello</h1>";
},10000);
