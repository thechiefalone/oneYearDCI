$(document).ready(function () {
    let sendData = {
        "key": "12000491-41fc68d8c365df909e022ceb6",
        "q": "bear",
        "image_type": "photo",
        "category": "animals",
        "pretty": true
    }
    $.ajax({
        type: "GET",
        url: "https://pixabay.com/api/",
        data: sendData,
        dataType: "json",
        success: function (response) {
            console.log(response);
        },
        error: function (err) {
            console.log(err);
        }
    });
});