var currencyJson;//we made it global
function getCurrency(calback) {
    let req = new XMLHttpRequest();
    req.open("GET", "https://api.exchangeratesapi.io/latest");
    req.send();
    req.onload = function () {
        let jsonObj = req.responseText;
        currencyJson = JSON.parse(jsonObj);
        let values = Object.values(currencyJson.rates);


        option = "";
        let keys = Object.keys(currencyJson.rates)
        for (var i = 0; i < keys.length; i++) {
            option += "<option value=" + keys[i] + ">" + keys[i] + "</option>"
        }
        document.getElementById("input-currency-sign").innerHTML = option;
        document.getElementById("output-currency-sign").innerHTML = option;
        calback();
    }
}

function convert() {
    let input = parseFloat(document.getElementById("input-currency-input").value);
    let inputCurrency = currencyJson.rates[document.getElementById("input-currency-sign").value];
    let outputCurrency = currencyJson.rates[document.getElementById("output-currency-sign").value];
    document.getElementById("result").innerText=(input*outputCurrency)/inputCurrency
}

window.onload=function(){
    getCurrency(convert);
}