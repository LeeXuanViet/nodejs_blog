const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const { Console } = require('console');
const app = express();
const port = 3000;

//http logger
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));

//template engine
app.engine(
  'hbs',
  handlebars.engine({
      extname: '.hbs',
      helpers: {
          sum: (a, b) => a + b,
      },
  }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})