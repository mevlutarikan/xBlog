const express = require('express');
const ejs = require('ejs');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
// static files middleware
app.use(express.static('public'));

app.get(['/', '/index'], (req, res) => {
  res.render('index');
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add_post', (req, res) => {
  res.render('add_post');
});
app.get('/post', (req, res) => {
  res.render('post');
});

app.listen(port, () => {
  console.log(`xBlog Node.js server is listening on port ${port}`);
});
