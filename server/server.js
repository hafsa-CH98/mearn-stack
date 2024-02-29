const express = require("express");
const app = express();
const port = 3005;
const mongoose = require("mongoose");
require("dotenv").config();
app.use(express.urlencoded({ extended: true }));
const cors = require("cors");
const UserModel = require("./models/Users");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World hello!!");
});

app.post("/", (req, res) => {
  // console.log("Hello  hello the is post valid!!");
  const newUser = new UserModel(req.body);
  newUser
    .save()
    .then(() => {
      console.log("seved post");
    })
    .catch((error) => console.log(error));
  res.send("seeeeveeeed post")
});


app.put("/:id", async(req, res) => {
  const user = await UserModel.findById(req.params.id);
  user.name = req.body.name;
  user.age = req.body.age;
  user.email = req.body.email;


 user.save()
 res.json(user)
} );



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
