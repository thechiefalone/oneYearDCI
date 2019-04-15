$(document).ready(function () {
    $("nav li").click(function () {
        $(this).children('ul').slideToggle(200);

        $(this).parent().find("ul").mouseleave(function(){
            var thisUI = $(this);
            $("html").click(function(){
              thisUI.hide();
              $("html").unbind("click");
            });
          });
    });
});