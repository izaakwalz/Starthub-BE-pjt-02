const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
// import database connncetion
const connectDB = require('./db');
// import error middlewares
const { notFound, errorHandler } = require('./middlewares/errorHandler');

dotenv.config();

const app = express();

app.use(express.json({ extended: false }));
app.use(cors());

// API routes
app.use('/api/v1', require('./routes/index.routes'));

app.get('/', (req, res) => {
  res.send('API IS RUNNING 🚨 🚨 🚨');
});
// error middlewares
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  await connectDB();
  console.log(`Server is up and running on port: ${port}`);
});
