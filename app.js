const { port, DB_URL } = require('./lib/config');
const express = require('express');
const app = express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const postModel = require('./models/post');

//validator middlewares
const postValidator = require('./validators/post');

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

//routes
app.get(['/', '/index'], async (req, res) => {
  const posts = await postModel
    .find(
      {},
      {
        _id: true,
        preview: { $substrCP: ['$postBody', 0, 150] },
        title: true,
        author: true,
        createdAt: true,
        updatedAt: true,
      },
      {
        sort: { _id: 'desc' },
        limit: 5,
      }
    )
    .lean()
    .exec();
  res.render('index', { posts });
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

app.post('/add_post', postValidator, async (req, res) => {
  const post = { title: req.body.title, postBody: req.body.postBody, author: req.body.author };
  try {
    await postModel.create(post);
  } catch (e) {
    if (e) return res.status(500).json(e);
  }
  res.redirect('post');
});

app.listen(port, () => {
  console.log(`xBlog Node.js server is listening on port ${port}`);
});
