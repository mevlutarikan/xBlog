const router = require('express').Router();
const postCont = require('../controllers/post');
const postValidator = require('../validators/post');

router.get('/add_post', (req, res) => {
  res.render('add_post');
});

router.post('/add_post', postValidator, postCont.addPost);

router.get('/:id', postCont.getPost);

module.exports = router;
