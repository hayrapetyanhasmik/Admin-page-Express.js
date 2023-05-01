const {Category} = require('../models');

 exports.addCategories = async(req, res)=>{
    try{
        const {name} = req.body;
        const data = await Category.create({name})
        res.status(201).json({message: "Category created"})
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
};

exports.getAllCategories = async(req,res)=>{
    try{
        const data = await Category.findAll()
        res.status(200).json(data) 
    }
    catch(err){
        res.status(404).json({error: err.message})
    }
}

exports.getCategoriesById = async(req,res)=>{
    try{
        const {id} = req.params;
        const data = await Category.findOne({where:{id:id}})
        res.status(200).json(data)
    }
    catch(err){
        res.status(404).json({error: err.message})
    }
}


exports.updateCategories = async(req,res)=>{
    try{
        const {id} = req.params;
        const{name} = req.body;
        const data = await Category.update({name},{where:{id}})
        res.status(200).json({message:"Updated"}) 
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

exports.deleteCategories = async(req,res)=>{
    try{
        const {id} = req.params
        const data = await Category.destroy({where:{id}})
        res.json({message:"Category deleted"})
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}