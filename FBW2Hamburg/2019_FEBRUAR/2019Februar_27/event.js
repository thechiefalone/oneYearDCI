function divclick() {
    alert("Hello");
}

window.onload = function () {
    document.getElementById("div1").addEventListener("dblclick", divclick);
}