const jwt = require("jsonwebtoken");

const verifyToken = async(req, res, next) => {
  const authHeader = req.headers.verifyToken;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
     jwt.verify(token, process.env.JWT, (err, user)=>{
        if(err){
            res.status(403).json("you are not authenticated!");
            req.user = user;
            next();
        }
    })
  } else {
    return res.status(401).json('You are not authenticated');
  }
};
const verifyTokenAndAuthorization = async(req, res, next) => {
    verifyToken(req, res, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin) {
            next();
        }
        else {
            res.status(403).json("You are not alowed to do that")
        }
    })
}

const verifyTokenAndAdmin = async(req, res, next) => {
    verifyToken(req, res, ()=>{
        if( req.user.isAdmin) {
            next();
        }
        else {
            res.status(403).json("You are not alowed to do that")
        }
    })
}
module.exports = verifyToken;
module.exports =verifyTokenAndAuthorization;
module.exports = verifyTokenAndAdmin;