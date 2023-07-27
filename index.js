const express = require('express')
require('dotenv').config()
const methodOverride =require('method-override')
//app.use('/places', placesController)
const mongoose =require('mongoose')
const placesController = require('./Controller/places')


const app = express()
//CRUD: create-post,GET-read,put/patch-update,delete-delete
//http methods:
//GET.POST,PUT,PATCH,DELETE
// MIDDLEWARE


app.use(methodOverride('_method'))
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
// db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }) .then(() => console.log('DB connected')) .catch(err => console.error(err));

//


//listen for connections
const  PORT = process.env.PORT
app.listen(PORT, console.log(`listening on port ${PORT}`))



