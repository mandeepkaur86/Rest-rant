const express = require('express')
require('dotenv').config()

const menuControllers = require('./Controller/menu')
const orderControllers = require('./Controller/order')
const contactControllers = require('./Controller/contact')
const placesController = require('./Controller/places')


const app = express()
//CRUD: create-post,GET-read,put/patch-update,delete-delete
//http methods:
//GET.POST,PUT,PATCH,DELETE
// MIDDLEWARE
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use(express.urlencoded({ extended:true}))
//routes & controllers
app.use('/menu', menuControllers)
app.use('/order', orderControllers)
app.use('/contact', contactControllers)
app.use('/places', placesController)


app.get('/',(req,res) =>{
    
    res.render('home')
})
app.get('*/',(req,res) =>{
    res.render('error404')
})

//listen for connections
const  PORT = process.env.PORT
app.listen(PORT, console.log(`listening on port ${PORT}`))



