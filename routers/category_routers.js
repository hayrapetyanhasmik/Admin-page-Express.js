const {addCategories,getAllCategories,getCategoriesById,updateCategories,deleteCategories} = require('../controllers/categories_controller');
const {authenticateTokenAdmin} = require('../JWT/JWT_authenticate_Admin');

exports.category_routers = (app)=>{
    app.post('/categories/add', authenticateTokenAdmin,addCategories);
    app.get('/categories', getAllCategories);
    app.get('/categories/getOne/:id', authenticateTokenAdmin,getCategoriesById);
    app.put('/categories/update/:id', authenticateTokenAdmin,updateCategories);
    app.delete('/categories/delete/:id', authenticateTokenAdmin,deleteCategories);
}