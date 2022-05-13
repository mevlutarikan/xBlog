const postModel = require('../models/post');

module.exports.index = async (req, res) => {
  const posts = await postModel
    .find(
      {},
      {
        _id: true,
        preview: { $substrCP: ['$postBody', 0, 150] },
        title: true,
        author: true,
        createdAt: true,
        updatedAt: true,
      },
      {
        sort: { _id: 'desc' },
        limit: 5,
      }
    )
    .lean()
    .exec();
  res.render('index', { posts });
};
