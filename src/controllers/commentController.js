const Comment = require('../models/Comment');

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find().populate('author').populate('post');
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createComment = async (req, res) => {
  const { content, author, post } = req.body;
  try {
    const newComment = new Comment({ content, author, post });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const updateComment = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  try {
    const updatedComment = await Comment.findByIdAndUpdate(id, { content }, { new: true });
    res.json(updatedComment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const deleteComment = async (req, res) => {
  const { id } = req.params;
  try {
    await Comment.findByIdAndDelete(id);
    res.json({ message: 'Comment deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getComments, createComment, updateComment, deleteComment };
