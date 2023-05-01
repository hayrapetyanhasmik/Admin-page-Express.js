const {verified} = require('../controllers/users_controller');


exports.mail_router = (app) => {
    app.get('/verify/:token', verified)
}

