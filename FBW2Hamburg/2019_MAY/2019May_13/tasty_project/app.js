const express = require('express');
const app = express();
const path = require('path');


const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,'public')));
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');


app.get('/', (req,res)=>{
res.send("Hello World");
});














app.listen(port, () => {console.log(`Server is running on port ${port}`);});
