const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema
const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      minlength: [2, 'Title can not be smaller than 2 characters'],
      maxlength: [120, 'Title can not be greater than 120 characters'],
      trim: true,
    },
    subTitle: {
      type: String,
      maxlength: [300, 'Sub title can not be greater than 300 characters'],
    },
    postBody: {
      type: String,
      required: [true, 'Post Content is required'],
      minlength: [3, 'Post can not be smaller than 2 characters'],
      maxlength: [10000, 'Post size is too long'],
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    image: String,
  },
  {
    timestamps: true,
  }
);

// postModel
module.exports = mongoose.model('Post', postSchema);
