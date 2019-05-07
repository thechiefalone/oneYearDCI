const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname,'./src/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'/public')));
app.get('/',(req,res)=>{
    // res.sendFile(path.join(__dirname,'/src/views/index.html'));
res.render('index');
});


app.listen(port, ()=>{console.log(`server strated at port number ${port}`);});