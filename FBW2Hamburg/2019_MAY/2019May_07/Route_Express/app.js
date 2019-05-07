const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

//Navigation Data Global --start--
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
//Navigation Data Global --end--

// Book Data --start--

const books = [
    {
      title: 'War and Peace',
      genre: 'Historical Fiction',
      author: 'Lev Nikolayevich Tolstoy',
      read: false
    },
    {
      title: 'Les Misérables',
      genre: 'Historical Fiction',
      author: 'Victor Hugo',
      read: false
    },
    {
      title: 'The Time Machine',
      genre: 'Science Fiction',
      author: 'H. G. Wells',
      read: false
    },
    {
      title: 'A Journey into the Center of the Earth',
      genre: 'Science Fiction',
      author: 'Jules Verne',
      read: false
    },
    {
      title: 'The Dark World',
      genre: 'Fantasy',
      author: 'Henry Kuttner',
      read: false
    },
    {
      title: 'The Wind in the Willows',
      genre: 'Fantasy',
      author: 'Kenneth Grahame',
      read: false
    },
    {
      title: 'Life On The Mississippi',
      genre: 'History',
      author: 'Mark Twain',
      read: false
    },
    {
      title: 'Childhood',
      genre: 'Biography',
      author: 'Lev Nikolayevich Tolstoy',
      read: false
    }];

// Book Data --end--

app.use(express.static(path.join(__dirname, '/public')));
app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname,'/src/views/index.html'));
    indexData.title="Books Store";
    res.render('index', indexData);

});

app.get('/authors', (req, res) => {
    indexData.title="Authors";
    res.render('authors', indexData);});

app.get('/books', (req, res) => {
    indexData.title="Books";
    indexData.books=books;
    res.render('books', indexData);
});

app.get('/publishers', (req, res) => {
    indexData.title="Publishers";
    res.render('publishers', indexData);
});

app.listen(port, () => {
    console.log(`server strated at port number ${port}`);
});