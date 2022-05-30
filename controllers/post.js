const postModel = require('../models/post');
const fs = require('fs');
const { uploadDir } = require('../lib/config');

module.exports.addPost = async (req, res) => {
  const post = {
    title: req.body.title,
    subTitle: req.body.subTitle,
    postBody: req.body.postBody,
    author: req.body.author,
  };
  if (req.file) post.images = [req.file.filename];
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
    if (post.isDeleted) throw 'Invalid Post ID';
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

module.exports.deletePost = async (req, res) => {
  const post = {
    isDeleted: true,
  };

  try {
    const result = await postModel.findByIdAndUpdate(req.params.id, post);
    result.images.forEach((image) => {
      fs.renameSync(uploadDir + '/' + image, uploadDir + '/recycleBin/' + image);
    });
    res.redirect('/');
  } catch (err) {
    return res.status(500).json({ msg: 'Database error on deleting the post', err });
  }
};
