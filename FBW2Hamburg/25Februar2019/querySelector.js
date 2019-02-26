window.onload=function(){
    let someElement=document.querySelector("p.someClass");
    someElement.setAttribute("style","color:red;");
    let someElement1=document.querySelector("h1");
    someElement1.setAttribute("style","color:blueviolet;");

    let someElement2=document.querySelectorAll(".someParagraph");//dikkat et All var
    someElement2[0].style.color="orange";
    someElement2[1].style.color="red";
    someElement2[2].style.color="blue";

    // setInterval(function(){
    //     alert("I am alperen");
    // },3000);

    
};