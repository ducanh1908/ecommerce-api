const jwt = require("jsonwebtoken");
const User = require('../model/user')
const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
     await jwt.verify(token, process.env.JWT, async(err, user) => {
      if (err) {res.status(403).json("Token is not valid!")}
      else {

          let newUSer = await User.findById(user.id)
          req.user = newUSer
          next();
      }
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("1 You are not alowed to do that!");
    }
  });
};


module.exports = verifyToken;
module.exports =verifyTokenAndAuthorization;
module.exports = verifyTokenAndAdmin;