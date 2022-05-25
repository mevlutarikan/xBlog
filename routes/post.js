const router = require('express').Router();

//validators
const postCont = require('../controllers/post');

//middlewares
const upload = require('../lib/upload');

// controllers
const postValidator = require('../validators/post');

router.get('/add_post', (req, res) => {
  res.render('add_post');
});

router.post('/add_post', upload.single('image'), postValidator, postCont.addPost);

router.get('/:id', postCont.getPost);

module.exports = router;
