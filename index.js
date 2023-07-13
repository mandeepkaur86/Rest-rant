
const express = require('express')
require('dotenv').config()

const menuControllers = require('./Controller/menu')
const orderControllers = require('./Controller/order')
const contactControllers = require('./Controller/contact')


const app = express()
//CRUD: create-post,GET-read,put/patch-update,delete-delete
//http methods:
//GET.POST,PUT,PATCH,DELETE
// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


//routes
app.use('/menu', menuControllers)
app.use('/order', orderControllers)
app.use('/contact', contactControllers)


const PORT = 8080//
console.PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))



