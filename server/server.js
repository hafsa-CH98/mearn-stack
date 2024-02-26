const express = require('express');
const app = express();
const port = 3005;
const mongoose = require("mongoose");
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello World hello!!");
});


mongoose
  .connect(
    `mongodb+srv://chidmihafsa4:${process.env.MONGODB_PASSWORD}@cluster0.hmxiy8t.mongodb.net/fullstack?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));
