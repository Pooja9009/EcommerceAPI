const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
//const fileUpload = require("express-fileupload");
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

const cloudinary = require('./utils/cloudinary');

const userRoute = require('./routes/user');
const profileRoute = require('./routes/profile');
const postRoute = require('./routes/Post');
const bookmarkRoute = require('./routes/bookmark');
const commentRoute = require('./routes/comment');
const groupRoute = require('./routes/group');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorHandler/error');

//^morgan
// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'));
// }

app.use(express.json());
//app.use(fileUpload())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:3000/',
  })
);
cloudinary();

//~routes
app.use('/users', userRoute);
app.use('/profile', profileRoute);
app.use('/post', postRoute);
app.use('/bookmark', bookmarkRoute);
app.use('/comment', commentRoute);
app.use('/group', groupRoute);

app.all('*', (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl} on this server`, 404));
});

//^global error handler
app.use(globalErrorHandler);

module.exports = app;
