const data = require('../data')
const Product = require("../models/productModel")

const getAllProducts = async (req,res) =>{
    const product = await Product.find()

    res.status(200).json(product)

}
const getOneProduct = async (req,res) =>{
    const {_id} = req.body

    const product = await Product.find({_id})

    res.status(200).json(product)

}

const createProduct = async (req,res) =>{
    const {newProduct} = req.body
    const product = await new Product(newProduct)
    product.save();
    res.status(200).json(product)


}
const deleteProduct = async (req,res) =>{
    const {_id} = req.body
    try{
        const product = await Product.deleteOne({_id})
        res.status(200).json(product)
    }catch(e){
        console.log(e.message)
    }

}

module.exports = {getAllProducts, getOneProduct, createProduct, deleteProduct}