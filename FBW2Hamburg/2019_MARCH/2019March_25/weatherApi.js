var apiKey = "085e9cd33056f583efc844c7ec4f5f72";
//{"coord":{"lon":10,"lat":53.55},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":279.31,"pressure":1014,"humidity":81,"temp_min":277.15,"temp_max":281.48},"visibility":10000,"wind":{"speed":4.1,"deg":290},"clouds":{"all":75},"dt":1553510905,"sys":{"type":1,"id":1263,"message":0.004,"country":"DE","sunrise":1553490676,"sunset":1553535647},"id":2911298,"name":"Hamburg","cod":200}
window.onload = function () {
    let weatherDiv = document.getElementById("weather");
    let inputCity = document.createElement("input");
    inputCity.type = "text";
    inputCity.placeholder = "Write your City";
    inputCity.onkeypress = function (event) {
        if (event.keyCode === 13) {
            showWeather(event, weatherDiv);
        }

    }
    weatherDiv.appendChild(inputCity);
}

function showWeather(someVar, mainDiv) {
    let inputCity = someVar.target.value;
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + inputCity + "&APPID=" + apiKey);
    xhr.send();
    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                // console.log(xhr.readyState);
                // console.log(xhr.status);
                // console.log(xhr.statusText);
                console.log(xhr.responseText);
                let weatherObject = JSON.parse(xhr.responseText);
                console.log(xhr.responseText)
                buildContent(weatherObject, mainDiv);


            }
        }
    }

}

function buildContent(data, container) {
    let citynameH = document.createElement("h1");
    let weather = document.createElement("h2");
    container.appendChild(citynameH);
    container.appendChild(weather);

    citynameH.innerText = data.name+" is/has";
    weather.innerText = data.weather[0].main;
}