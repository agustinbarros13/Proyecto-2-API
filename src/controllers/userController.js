const User = require('../models/User');

const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

const createUser = async (req, res) => {
  const { username, password } = req.body;
  const newUser = new User({ username, password });
  await newUser.save();
  res.status(201).json(newUser);
};

module.exports = { getUsers, createUser };
