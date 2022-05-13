const postModel = require('../models/post');

module.exports.addPost = async (req, res) => {
  const post = { title: req.body.title, postBody: req.body.postBody, author: req.body.author };
  try {
    await postModel.create(post);
  } catch (e) {
    if (e) return res.status(500).json(e);
  }
  res.redirect('post');
};
