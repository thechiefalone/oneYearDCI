for (let i = 0; i < 7; i++) {
    let storage = "";
    for (let j = 0; j < 7; j++) {
        if (i == 0 || j == 0 || j == 6 || i == 6 || i == j||i+j==6 ) {
            //i==1&&j==5||i==2&&j==4||i==3&&j==3||i==4&&j==2||i==5&&j==1
            storage += "*";

        } else {
            storage += " ";
        }
    }
    // storage = i + storage;
    console.log(storage);

}



for(m=0;m<7;m++){
    let data="";
    for(n=0;n<7;n++){
        data+="#";
    }
    console.log(data);

}

