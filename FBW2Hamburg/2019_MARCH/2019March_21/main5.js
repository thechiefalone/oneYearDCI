var RESdata;

window.onload=function(){
    getData(showData);

}

function getData(someFunc){
let req=new XMLHttpRequest();
req.open("GET","https://reqres.in/api/users?page=1");
req.send();
req.onreadystatechange=function(){
    if(req.status==200 && req.readyState==4 ){
let jsonObj=req.responseText;
RESdata=JSON.parse(jsonObj);
console.log(RESdata);
someFunc();
    }
}
}
function showData(){
    let mainTable=document.createElement("table");
    for (let i = 0; i < RESdata.data.length; i++) {
        let row=mainTable.insertRow();
        let idCell=row.insertCell();
        idCell.innerText=RESdata.data[i].id;
        let fnameCell=row.insertCell();
        fnameCell.innerText=RESdata.data[i].first_name;
        let lnameCell=row.insertCell();
        lnameCell.innerText=RESdata.data[i].last_name;
        let avatarCell=row.insertCell();
        let avatarImg=document.createElement("img");
        avatarImg.src=RESdata.data[i].avatar;
        avatarCell.appendChild(avatarImg);

    }
    document.getElementById("container").appendChild(mainTable);
}

