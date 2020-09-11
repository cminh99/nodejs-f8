require('./config/db').connect();

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const port = 3000;

const app = express();

const siteRoutes = require('./routes/site.route');
const newsRoutes = require('./routes/news.route');
const courseRoutes = require('./routes/course.route');

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
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/', siteRoutes);
app.use('/news', newsRoutes);
app.use('/courses', courseRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
