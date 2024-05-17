

var userModel = require('./userModel')

var createUserControllerFn = async (req, res) => 
    {
        try
    {
        const body = req.body
        const userModelData = new userModel()
        userModelData.name = body.name
        userModelData.address = body.address
        userModelData.phone = body.phone
        await userModelData.save()
    
        res.status(200).send({
            "status": true, "message": "user created successfully" 
        });
    }
    catch(error)
    {
        res.status(400).send(error);
    }
}
module.exports = { createUserControllerFn };