const express = require('express');
const path = require('path');

const app = express();

app.get('/', function (req, res) {
    // res.send("Hello World");


    // let obj = {
    //     name: 'Ahmad',
    //     status: 'Cool',
    //     age: 33,
    //     married: true
    // };
    // res.json(obj);

    // res.sendFile(__dirname +'/views/index.html');
    res.sendFile(path.join(__dirname,'/views/index.html'));

});

const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
});