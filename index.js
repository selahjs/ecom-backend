const express = require('express')
const mongoose = require('mongoose');
const Product = require("./models/productModel")
const cors = require('cors')
const {login, signup} = require("./controller/userController")
const {getAllProducts, getOneProduct, deleteProduct} = require("./controller/productController")

const app = express()
const port = 3001

app.use(cors());
//we must use express.json() to parse our reqest body to json or req.body will be undefined
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
  .then(() => console.log('Connected!'));

app.get('/', getAllProducts)

app.get('/api/product/:id', getOneProduct)

app.delete('/api/product/:id', deleteProduct)

app.post('/api/user/login', login)

app.post('/api/user/signup', signup)

app.listen(port, ()=>{
    console.log(`listning on port ${port}`)
})