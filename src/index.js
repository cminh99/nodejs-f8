const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const port = 3000;

const app = express();

const homeRoute = require('./routes/home.route');
const newsRoute = require('./routes/news.route');

// Setup template engine
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs'
  })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Global middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));

// Routes
app.use('/', homeRoute);
app.use('/news', newsRoute);

app.listen(port, () => console.log(`Server running on port ${port}`));
