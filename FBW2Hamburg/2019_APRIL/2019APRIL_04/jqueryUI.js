$(document).ready(function(){
    $("#accordion").accordion();
    $( "#radioset" ).buttonset();
    themeChange(p);
});


function themeChange(p){
    if(p===blitzer){
        $("link[rel='stylesheet']:first-of-type").attr({
            href: "./Themes/blitzer/jquery-ui.css"
        });
    }
    if(p===smoothness){
        $("link[rel='stylesheet']:first-of-type").attr({
            href: "./Themes/smoothness/jquery-ui.css"
        });
    }
}