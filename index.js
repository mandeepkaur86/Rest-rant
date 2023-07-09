
const express = require('express')
require('dotenv').config()

const menuControllers = require('./Controller/menu')
const orderControllers = require('./Controller/order')


const app = express()
//CRUD: create-post,GET-read,put/patch-update,delete-delete
//http methods:
//GET.POST,PUT,PATCH,DELETE


//routes
app.use('/menu', menuControllers)
app.use('/order', orderControllers)



const PORT = 8080//
console.PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))



