const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");
const app = express();
const cors = require("cors");

//environment variables
env.config();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;
const URL = process.env.mongoURL;

//routes

const authRoutes = require('./routes/auth');

app.use(express.json());
app.use('/api', authRoutes);

mongoose
  .connect(URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

  app.listen(PORT, () => console.log(`Server is running successfully on port ${PORT}`));
