window.onload = function () {
    let container = document.getElementById("container");
    if (container) {
        let input = document.createElement("input");
        input.type = "text";
        container.appendChild(input);
    } else {
        alert("You have to add a div with id name container");
    }
}