const router = require('express').Router();
const postRouter = require('./post');

//controller
const rootCont = require('../controllers/root');

router.get(['/', '/index'], rootCont.getIndex);

router.get('/about', (req, res) => {
  res.render('about');
});

// add, list, edit post route
router.use('/post', postRouter);

module.exports = router;
