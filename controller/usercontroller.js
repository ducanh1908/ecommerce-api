
const bcrypt = require('bcrypt')
const User = require('../model/user')
const userController = {
    updateUser : async(req, res) => { 
        console.log(req.body.password)

        if(req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, 10)
            try {
                const updateUser = await User.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                },{new:true})
                res.status(200).json(updateUser)
            } catch (error) {
                res.status(500).json(err)
            }
        }
    },
    deleteUser: async(req, res)=>{
        try {
            await User.findByIdAndDelete(req.params.id)
            res.status.json('User has been delete...')
        } catch (error) {
            res.status(500).json(error)
        }
    }


}

module.exports =  userController