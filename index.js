require('dotenv').config()
const port = 3000;
const express = require("express");
const app = express();
const path = require("path");

const mongoose = require("mongoose");
const userRouter = require('./routes/user-routes')

mongoose.connect(process.env.DB_URI).then(() => {
  console.log('Connected to MongoDB')
}).catch((err) => console.log(err))


app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`)
    next()
})

app.use(express.json())

app.use('/users', userRouter)

app.use((err, req, res, next) => {
  console.log(err.stack)
  if (res.statusCode == 200) res.status(500)
  res.json({ msg: err.message })
})

mongoose.connection.once('open', () => {
  app.listen(port, () => {
      console.log(`Server is running at port ${port}`)
  })
})


