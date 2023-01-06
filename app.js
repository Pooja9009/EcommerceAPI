require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
// const logger = require("./logger");

const path = require("path");
const auth = require("./middleware/auth")
const { application } = require("express");
const user_routes = require("./routes/user-routes");
const profile_routes = require('./routes/profile-routes')
const post_routes = require('./routes/post-routes')
// const

const app = express();
const port = 3000;

mongoose
  .connect("mongodb://127.0.0.1:27017/books-pooja")
  .then(() => {
    console.log("Connected to mongoDB server");
    app.listen(port, () => {
      console.log(`App is running on port: ${port}`);
    });
  })
  .catch((err) => next(err));

// Logger
// 1.Application Level Midlleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Express defined
app.use(express.json());

// Home Page
app.get("^/$|/index(.html)?", (req, res) => {
  // res.send("Hello world")
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Router level
app.use("/user", user_routes);
// app.use(auth.verifyUser);
app.use('/profile',auth.verifyUser,profile_routes)
app.use('/post',auth.verifyUser,post_routes)


// Error handling
app.use((err, req, res, next) => {
  console.log(err.stack)
  if (res.statusCode == 200)res.status(500)
  res.json({"msg":err.message})
  });
// });


