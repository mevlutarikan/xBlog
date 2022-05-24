const postModel = require('../models/post');

module.exports.getIndex = async (req, res) => {
  const posts = await postModel
    .find({}, null, {
      sort: { _id: 'desc' },
      limit: 5,
    })
    .exec();
  res.render('index', { posts });
};
