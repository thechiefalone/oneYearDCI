const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const logger = require('morgan');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

// Routes --start--
const router = require('./src/routes/routes');
app.use('/', router);
app.use('/menu', router);
app.use('/specialties', router);
app.use('/reservation', router);
app.use('/blog', router);
app.use('/about', router);
app.use('/contact', router);
// Routes --end--




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});