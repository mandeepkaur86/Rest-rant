const express = require('express')
require('dotenv').config()
const methodoverride =require('method-override')
//app.use('/places', placesController)
const placesController = require('./Controller/places')


const app = express()
//CRUD: create-post,GET-read,put/patch-update,delete-delete
//http methods:
//GET.POST,PUT,PATCH,DELETE
// MIDDLEWARE


app.use(methodoverride('_method'))
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


//routes)
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



