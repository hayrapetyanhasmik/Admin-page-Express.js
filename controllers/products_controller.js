const {Product, Category} = require('../models');


exports.addProducts = async(req, res)=>{
    try{
        const {name,price,img,categoryId,quantity} = req.body;
        const data = await Product.create({name,price,img,categoryId,quantity})
        res.status(201).json({message: "Product added"})
    }
    catch(err){
        res.status(500).json({error: err.message})
    } 
};

exports.getAllProducts = async(req,res)=>{
    try{
        const data = await Product.findAll({ include: Category})
        console.log(data);
        res.status(200).json(data) 
    }
    catch(err){
        res.status(404).json({error: err.message})
    }
}


exports.getProductsById = async(req,res)=>{
    try{
        const {id} = req.params;
        const data = await Product.findOne({where:{id}})
        res.status(200).json(data) 
    }
    catch(err){
        res.status(404).json({error: err.message})
    }
}

exports.updateProducts = async(req,res)=>{
    try{
        const {id} = req.params;
        const {name,price,img,categoryId,quantity} = req.body;
        const data = await Product.update({name,price,img,categoryId,quantity},{where:{id}})
        res.status(200).json({message: "Updated"}) 
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

exports.deleteProducts = async(req,res)=>{
    try{
        const {id} = req.params
        const data = await Product.destroy({where:{id}})
        res.json({message:"Product deleted"})
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}