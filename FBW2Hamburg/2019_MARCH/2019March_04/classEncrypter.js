function encrypter(text, key) {
    let storage = [];
    for (let i = 0; i < text.length; i++) {
        storage.push(text[i].charCodeAt(0) * key);
    }
    return storage.join(","); //join array to string
}
console.log(encrypter("hello i am Ahmad", 500));

function decrypter(code, key) {
    let numbersArr = code.split(","); // split string to array
    let storage = "";
    for (let i = 0; i < numbersArr.length; i++) {
        storage += String.fromCharCode(numbersArr[i] / key);
    }
    console.log(storage);
}
let encryptedText = "52000,50500,54000,54000,55500,16000,52500,16000,48500,54500,16000,32500,52000,54500,48500,50000"
decrypter(encryptedText, 500);