$(document).ready(function () {
    var mouseDivDown = false;
    var differenceX = 0;
    var differenceY = 0;
    $(".draggable").mousedown(function (e) {
        let position = $(".draggable").position();
        mouseDivDown = true;
        differenceX = e.clientX - position.left;
        differenceY = e.clientY - position.top;
    });

    $(".draggable").mouseup(function () {
        mouseDivDown = false;
    });

    $("body").mousemove(function (e) {
        if (mouseDivDown) {
            $(".draggable").css("top", e.clientY - differenceY);
            $(".draggable").css("left", e.clientX - differenceX);
        }
    });
});