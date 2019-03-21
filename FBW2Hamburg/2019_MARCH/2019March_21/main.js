function getApi() {
    let req = new XMLHttpRequest();
    req.open("GET","https://reqres.in/api/users?page=2");
    req.send();
    req.onload=function(){
        let jsonObj = req.responseText;
        let profileJson = JSON.parse(jsonObj);
        console.log(profileJson.data)

            document.getElementById("name1").innerHTML=profileJson.data[0].first_name;
            document.getElementById("surname1").innerHTML=profileJson.data[0].last_name;
            document.getElementById("image1").src=profileJson.data[0].avatar;

            document.getElementById("name2").innerHTML=profileJson.data[1].first_name;
            document.getElementById("surname2").innerHTML=profileJson.data[1].last_name;
            document.getElementById("image2").src=profileJson.data[1].avatar;

            document.getElementById("name3").innerHTML=profileJson.data[2].first_name;
            document.getElementById("surname3").innerHTML=profileJson.data[2].last_name;
            document.getElementById("image3").src=profileJson.data[2].avatar;


    }

}

getApi();
