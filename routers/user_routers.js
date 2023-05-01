const {getVerifiedUsers,register,login,updateUser,deleteUser} = require('../controllers/users_controller');
const {authenticateTokenAdmin} = require('../JWT/JWT_authenticate_Admin');

exports.user_routers = (app)=>{
    app.get('/users/getAll', getVerifiedUsers)
    app.post('/users/register', register)
    app.post('/users/login', login)
    app.put('/users/update/:id',  updateUser);
    app.delete('/users/delete/:id', authenticateTokenAdmin, deleteUser);
}