const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const connectDB = require('./config/database');

connectDB();

const seedData = async () => {
  try {
    await User.deleteMany();

    const adminPassword = await bcrypt.hash('admin123', 10);
    const userPassword = await bcrypt.hash('user123', 10);

    const users = [
      {
        username: 'admin',
        password: adminPassword,
        role: 'admin',
      },
      {
        username: 'user1',
        password: userPassword,
        role: 'user',
      },
      {
        username: 'user2',
        password: userPassword,
        role: 'user',
      },
    ];

    await User.insertMany(users);
    console.log('Seed data inserted successfully');
    process.exit();
  } catch (error) {
    console.error('Error inserting seed data:', error);
    process.exit(1);
  }
};

seedData();

