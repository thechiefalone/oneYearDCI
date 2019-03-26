var apiKey = "085e9cd33056f583efc844c7ec4f5f72";
var inputCity = "london"

window.onload = () => {

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputCity + "&APPID=" + apiKey).
    then(function (response) {
        console.log(response.status);
        if (response.status !== 200) {
            return;
        }
        response.json().then(function (data) {
            console.log(data.name);
        })
    });
}