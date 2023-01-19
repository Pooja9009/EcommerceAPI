const jwt = require("jsonwebtoken");
const verifyUser = (req, res, next) => {
  if (!req.headers.authorization) {
    let err = new Error("Authorization token is missing");
    res.status(400);
    return next(err);
  }
  token = req.headers.authorization.split(" ")[1];

  // console.log(req.headers.authorization)
  console.log(token);
  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) return next(err);
    req.user=decoded
    next()
    console.log(decoded);
  });
};

const verifyAdmin = (req, res, next) => {
  if (req.user.role != "Admin") {
    let err = new Error("You are not authorized");
    res.status(403);
    return next(err);
  }
  next()
};
const verifyManager =(req, res, next) => {
  if (req.user.role != "Admin" || req.user.role != "Manager") {
     return next
  }
  res.status(403)
  next(new Error('Not Authorized'))
  
};
module.exports = { 
  verifyUser, 
  verifyAdmin 
};
