window.onload = () => {
    try {
        let message = document.getElementById("message");
        console.log(message);
    } catch (err) {
        console.log(err);
    } finally {
        console.log("finally will be done in both cases \
    . with error or without error")
    }
    console.log("i am a code should be executed");
}