
const bcrypt = require('bcrypt')
const User = require('../model/user')
const userController = {
    updateUser : async(req, res) => {
       
        if(req.body.password) {
            req.body.password = bcrypt.hash(req.body.password, 10)
            try {
                const updateUser = await User.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                },{new:true})
                res.status(200).json(updateUser)
            } catch (error) {
                res.status(500).json(err)
            }
        }
    }

}

module.exports =  userController