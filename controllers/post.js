const postModel = require('../models/post');

module.exports.addPost = async (req, res) => {
  const post = {
    title: req.body.title,
    subTitle: req.body.subTitle,
    postBody: req.body.postBody,
    author: req.body.author,
    images: [req.file.filename],
  };
  try {
    await postModel.create(post);
    res.redirect('/');
  } catch (err) {
    return res.status(500).json({ msg: 'Database error on creating new post', err });
  }
};

module.exports.getPost = async (req, res) => {
  try {
    let post = await postModel.findById(req.params.id);
    res.render('post', { post });
  } catch (err) {
    return res.status(404).json({ msg: 'Invalid Post ID', err });
  }
};

module.exports.getPostForEdit = async (req, res) => {
  try {
    let post = await postModel.findById(req.params.id);
    res.render('edit_post', { post });
  } catch (err) {
    return res.status(404).json({ msg: 'Invalid Post ID', err });
  }
};

module.exports.editPost = async (req, res) => {
  const post = {
    title: req.body.title,
    subTitle: req.body.subTitle,
    postBody: req.body.postBody,
  };

  if (req.file) post.images = [req.file.filename];

  try {
    await postModel.findByIdAndUpdate(req.params.id, post);
    res.redirect('/');
  } catch (err) {
    return res.status(500).json({ msg: 'Database error on updating the post', err });
  }
};
