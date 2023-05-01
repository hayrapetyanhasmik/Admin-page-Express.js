const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {generateAccessToken} = require('../JWT/JWT_generate');
const {User} = require('../models');
const {send_Mail} = require('../mailer');
const SECRET = process.env.SECRET;
const {regSchema, logSchema} = require('../validators');


exports.register = async (req,res) => {
    try{
        const {error} = regSchema.validate(req.body);
            if(error){
                return res.status(400).json({error: error.details[0].message});
            }
        const {role,userName,firstName,lastName,email,password} = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashed_password = await bcrypt.hash(password, salt);
        const emailExists = await User.findOne({where: {email}});
            if(emailExists){
                return res.status(400).json({message: "Account with this email already exists"});
            }
        await User.create({userName,firstName,lastName,email,password:hashed_password})
        const token = generateAccessToken(role,email)
        send_Mail(email,token)
        res.status(201).json({message: "User created",token:token})
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

exports.verified = async (req,res) => {
   try{
    const token = req.params.token
    const decoded= jwt.verify(token,SECRET)
    await User.update({is_Verified:1},{where:{email:decoded.email}})
    res.status(200).json({message:"Verified"}) 
   }
    catch(err){
        res.status(500).json({error: err.message}) 
    }
}

exports.getVerifiedUsers = async (req,res) => {
    try{
        const data = await User.findAll({where:{is_Verified:1}})
        res.status(200).json({message:"You are welcomed",data:data})
    }
    catch(err){
        res.status(500).json({message:"Not verified"})
    }
} 


exports.login = async (req,res) => {
    try{ 
        const {error} = logSchema.validate(req.body);
        if(error){
            return res.status(400).json({error: error.details[0].message});
        }
    const {email,password} = req.body;
    const data = await User.findOne({where: {email:email}})
    if(data.email === email && bcrypt.compare(data.password,password)  && data.is_Verified===1){
        const token = generateAccessToken(data.role,email);
        res.status(200).json({message: "Logged in!",token:token,role:data.role})
    }
    }  
    catch(err){
        res.status(403).json({error: "Login credentials are incorrect!"})
    }
}
    

        
exports.updateUser = async (req,res) => {
    try{
        const {id} = req.params;
        const {role} = req.body;
        await User.update({role},{where:{id}})
        res.status(200).json({message:"User updated"}) 
    }
    catch(err){
        res.status(500).json({error: err.message}) 
    }
}

exports.deleteUser = async (req,res) => {
    try{
        const {id} = req.params;
        await User.destroy({where:{id}})
        res.status(204).json({message:"User deleted"}) 
    }
    catch(err){
        res.status(500).json({error: err.message}) 
    }
}





