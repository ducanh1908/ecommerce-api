const User = require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


const authController = {
   register : async (req, res) => {
        const user = req.body
    const hashPassword = await bcrypt.hash(user.password, 10)
const registerUsername = await User.findOne({username: user.username})

    if(registerUsername) {
        res.status(400).json({
            message: 'Username đã tồn tại !'
        })
    }
    else {
        const registerEmail = await User.findOne({email : user.email}) 
        if(registerEmail) {
          return res.status(400).json({
            message : 'Email đã tồn tại'})
        }
          const newUser = new User({
              username: user.username,
              email: user.email,
              password: hashPassword
          })
          try {
            await newUser.save();
           res.status(200).json(newUser)
       }
       catch(err){
           res.status(500).json(err)
       }
    }
  
   
   },

   login: async (req, res)=>{
    const userLogin = req.body
    try {
        const user = await User.findOne({username: userLogin.username})
        if(!user) {
            res.status(400).json('username is not exits')   
        }
        else {
            if(user.password){
                let comparePassword = await bcrypt.compare(userLogin.password,user.password)
                if(!comparePassword){
                    res.status(401).json({msg:'Incorrect password'})
                }
                else {
                    const access_token = jwt.sign({
                        id: user._id
                    },process.env.JWT,{expiresIn:"3d"})

                    const {password, ...others} = user._doc


                    res.status(200).json({...others, access_token})
                }
            }
            }     
        }
     catch (error) {
        res.status(500).json(error)
    }

   }

}

module.exports =  authController