var currencyJson; //we made it global
function getCurrency(callback) {
    let req = new XMLHttpRequest();
    req.open("GET", "https://api.exchangeratesapi.io/latest");
    req.send();
    //this way is to prevent errors
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            //req.onload = function () {
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
                callback();
            //}
        }
    }

}

function convert() {
    let input = parseFloat(document.getElementById("input-currency-input").value);
    let inputCurrency = currencyJson.rates[document.getElementById("input-currency-sign").value];
    let outputCurrency = currencyJson.rates[document.getElementById("output-currency-sign").value];
    document.getElementById("result").innerText = (input * outputCurrency) / inputCurrency
}

window.onload = function () {
    getCurrency(convert);
}