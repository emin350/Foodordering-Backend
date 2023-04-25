const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const mongoose = require("mongoose")
const authController = require('./controllers/authController')
const productController = require('./controllers/productController')
const uploadController = require('./controllers/uploadController')
const app = express()

//connect
mongoose
.connect(
    'mongodb+srv://username123:username123@cluster0.xh9cjoz.mongodb.net/?retryWrites=true&w=majority' 
    ).then(() => 
    console.log("db is connected succesfully"))
.then(()=>app.listen(5000))
.then(() => 
console.log("server started"))
.catch((err)=> console.log(err));

//routes and middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/images', express.static('public/images'))
app.use('/auth', authController)
app.use('/product', productController)
app.use('/upload',uploadController)
