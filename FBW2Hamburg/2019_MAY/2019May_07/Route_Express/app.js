const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

//Navigation Data Global --Start--
let indexData = {
    title: "Books Store",
    nav: [{
        title: 'Authors',
        link: '/authors'
    }, {
        title: 'Books',
        link: '/books'
    }, {
        title: 'Publishers',
        link: '/publishers'
    }]
};
//Navigation Data Global --End--

app.use(express.static(path.join(__dirname, '/public')));
app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname,'/src/views/index.html'));
    indexData.title="Books Store"
    res.render('index', indexData);

});

app.get('/authors', (req, res) => {
    res.send("Hello Authors");
});

app.get('/books', (req, res) => {
    indexData.title="Books"
    res.render('books', indexData);
});

app.get('/publishers', (req, res) => {
    res.send("Hello Publishers");
});

app.listen(port, () => {
    console.log(`server strated at port number ${port}`);
});