const router = require('express').Router();

// controllers
const postCont = require('../controllers/post');

//middlewares
const upload = require('../lib/upload');

//validators
const postValidator = require('../validators/post');

router.get('/add_post', (req, res) => {
  res.render('add_post');
});

router.post('/add_post', upload.single('image'), postValidator, postCont.addPost);

router.get('/edit_post/:id', postCont.getPostForEdit);
router.post('/edit_post/:id', upload.single('image'), postValidator, postCont.editPost);

router.get('/:id', postCont.getPost);

module.exports = router;
