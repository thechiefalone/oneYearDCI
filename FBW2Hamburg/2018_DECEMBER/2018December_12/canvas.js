window.onload=function(){
    let canvas = document.getElementById('canv1');
    let conx = canvas.getContext('2d');
    
    //draw line
    //conx.moveTo(100,0);
    //conx.lineTo(100,100);
    
    //draw cicle
    conx.beginPath();
    //conx.arc(x,y,Radius)
    conx.arc(100,50,40,2*Math.PI,false);
    
    conx.stroke();
    conx.font="30px Arial";
    conx.strokeText("FBW", 65,60);
}