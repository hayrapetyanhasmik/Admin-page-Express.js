const express = require('express');
const app = express();
app.use(express.json());
//const Sequelize = require('sequelize');
//const sequelize = new Sequelize('mydb',null,null,{dialect:'sqlite',storage:'database.db'});
const cors = require('cors');

const {product_routers} = require('./routers/product_routers');
const {category_routers} = require('./routers/category_routers');
const {user_routers} = require('./routers/user_routers');
const {mail_router} = require('./routers/mail_router');
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});




product_routers(app);
category_routers(app);
user_routers(app);
mail_router(app);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});