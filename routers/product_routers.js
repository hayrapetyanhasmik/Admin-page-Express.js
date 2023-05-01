//const express = require('express');
//const router = express.Router();
const {addProducts,getAllProducts,getProductsById,updateProducts,deleteProducts} = require('../controllers/products_controller');
const {authenticateTokenAdmin} = require('../JWT/JWT_authenticate_Admin');

exports.product_routers = (app)=>{
    app.post('/products/add', authenticateTokenAdmin, addProducts);
    app.get('/products', getAllProducts);
    app.get('/products/getOne/:id', authenticateTokenAdmin, getProductsById);
    app.put('/products/update/:id', authenticateTokenAdmin, updateProducts);
    app.delete('/products/delete/:id', authenticateTokenAdmin, deleteProducts);
}


