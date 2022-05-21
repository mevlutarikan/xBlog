const postModel = require('../models/post');

module.exports.addPost = async (req, res) => {
  const post = { title: req.body.title, postBody: req.body.postBody, author: req.body.author };
  try {
    await postModel.create(post);
    res.redirect('/');
  } catch (err) {
    return res.status(500).json({ msg: 'Database Error on creating new post', err });
  }
  res.redirect('post');
};

module.exports.getPost = async (req, res) => {
  try {
    let post = await postModel.findById(req.params.id);
    res.render('post', { post });
  } catch (err) {
    return res.status(404).json({ msg: 'Invalid Post ID', err });
  }
};
