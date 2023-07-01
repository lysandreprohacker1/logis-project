const jwt = require('jsonwebtoken');
const code_secret = 'àj)jhçjçàyojojhljopulpkohtojpyk4984htkopgkriogrgrgjbrgjoptojopjg@@@@@@@@@'

const generateToken = (userData)=>{
    jwt.sign({
        userId:userData.id,
        isAdmin:userData.isAdmin
    },code_secret,{expiresIn:'2h'})
}

exports.generateToken=generateToken