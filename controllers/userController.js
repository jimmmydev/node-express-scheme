const UserLogic = require("../logic/userLogic");

const addUser = async (req, res)=>{
    try {
        const user = await UserLogic.create(req);
        res.status(200).json({ user: user })
    }
    catch (err) {
        console.log(err)
        res.send({ status: 'err', message: err });
    }
}

const findByEmail = async (req, res)=>{
    try {
        const user = await UserLogic.findByEmail(req);
        res.status(200).json({ user: user })
    }
    catch (err) {
        console.log(err)
        res.send({ status: 'err', message: err });
    }
}

module.exports = {
    addUser,
    findByEmail
}