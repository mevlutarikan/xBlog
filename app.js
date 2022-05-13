const { port, DB_URL } = require('./lib/config');
const express = require('express');
const app = express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const rootRouter = require('./routes/root');

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to database'))
  .catch((e) => console.log(e));

app.set('view engine', 'ejs');
// middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//all routes
app.use('/', rootRouter);

app.listen(port, () => {
  console.log(`xBlog Node.js server is listening on port ${port}`);
});
