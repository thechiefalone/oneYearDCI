function niceGuy (){
    let container = document.getElementById("container1");
    if(container != null ){
        container.innerText="Hello i am a nice guy to date";

    }else{
        throw "Hey you dont have element with id container";
    }
}

window.onload=()=>{
    try {
        niceGuy();

    } catch (error) {
        console.log("you have an error like "+error); // error comes from throw
    }
    console.log("i am a code functioning after the niceGuy Function ...")
}