const mongoose = require('mongoose');
const User = require('./models/User');
const Post = require('./models/Post');
const Comment = require('./models/Comment');
const dbConfig = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();
dbConfig();

const seedDatabase = async () => {
  try {
    await User.deleteMany();
    await Post.deleteMany();
    await Comment.deleteMany();

    const users = await User.insertMany([
      { username: 'admin', password: 'password123', role: 'admin' },
      { username: 'user1', password: 'password123', role: 'user' },
    ]);

    const posts = await Post.insertMany([
      { title: 'First Post', content: 'This is the first post.', author: users[0]._id },
      { title: 'Second Post', content: 'This is the second post.', author: users[1]._id },
    ]);

    await Comment.insertMany([
      { content: 'Great post!', user: users[1]._id, post: posts[0]._id },
      { content: 'Thanks for sharing!', user: users[0]._id, post: posts[1]._id },
    ]);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();

