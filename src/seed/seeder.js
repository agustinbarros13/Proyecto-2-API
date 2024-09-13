const mongoose = require('mongoose');
const User = require('./models/User');
const Post = require('./models/Post');
const Comment = require('./models/Comment');
const dbConfig = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();
dbConfig();

const seedDatabase = async () => {
  await User.deleteMany();
  await Post.deleteMany();
  await Comment.deleteMany();

  const users = [
    { username: 'admin', password: 'password123', role: 'admin' },
    { username: 'user1', password: 'password123', role: 'user' },
  ];

  const [admin, user] = await User.insertMany(users);

  const posts = [
    { title: 'First Post', content: 'This is the first post.', author: admin._id },
    { title: 'Second Post', content: 'This is the second post.', author: user._id },
  ];

  const [firstPost, secondPost] = await Post.insertMany(posts);

  const comments = [
    { content: 'Great post!', user: user._id, post: firstPost._id },
    { content: 'Thanks for sharing!', user: admin._id, post: secondPost._id },
  ];

  await Comment.insertMany(comments);

  console.log('Database seeded');
  mongoose.connection.close();
};

seedDatabase();
