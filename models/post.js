const mongoose = require('mongoose');
const MongooseSchema = mongoose.Schema;

// schema
const postSchema = new MongooseSchema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      minlength: [2, 'Title can not be smaller than 2 characters'],
      maxlength: [120, 'Title can not be greater than 120 characters'],
      trim: true,
    },
    postBody: {
      type: String,
      required: [true, 'Post Content is required'],
      minlength: [3, 'Post can not be smaller than 2 characters'],
      maxlength: [10000, 'Post size is too long'],
    },
    author: {
      type: String,
      //required: [true, 'Author is required'],
      maxlength: [120, 'Author too long'],
    },
    image: String,
  },
  {
    timestamps: true,
  }
);

// postModel
module.exports = mongoose.model('Post', postSchema);
