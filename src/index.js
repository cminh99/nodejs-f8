const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const port = 3000;

const app = express();

// setup template engine
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs'
  })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// global middlewares
app.use(morgan('dev'));

app.get('/', (req, res) => res.render('home'));

app.listen(port, () => console.log(`Server running on port ${port}`));
