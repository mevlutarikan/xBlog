const router = require('express').Router();
const postRouter = require('./post');

//controller
const rootCont = require('../controllers/root');

router.get(['/', '/index'], rootCont.index);

router.get('/about', (req, res) => {
  res.render('about');
});

router.use('/post', postRouter);
module.exports = router;
