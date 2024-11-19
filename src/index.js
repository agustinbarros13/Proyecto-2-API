const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const helmet = require('helmet');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet()); 
app.use(cors()); 

// base de datos
connectDB();

// rutas
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const userRoutes = require('./routes/userRoutes');

// Definir rutas
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/users', userRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong' });
});

//servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
