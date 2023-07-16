const router = require('express').Router()

let places = [{
   name: 'H-Thai-ML',
   city: 'Seattle',
   state: 'WA',
   cuisines: 'Thai, Pan-Asian',
   pic: 'http://placekitten.com/250/250'
 }, {
   name: 'Coding Cat Cafe',
   city: 'Phoenix',
   state: 'AZ',
   cuisines: 'Coffee, Bakery',
   pic: 'http://placekitten.com/250/250'
 }]
 router.get('/new',(req,res) =>{
    res.render('places/index')

 })
 router.get('/',(req,res) =>{
  ///res.send(`<h1>Bhelpuri</h1>`)
 res.render('places/index',{places})
})

router.post('/',(req,res) =>{
  console.log(req.body)
  if(!req.body.pic){
    req.body.pic ='http://placekitten.com/400/400'
  }
  if(! req.body.city){
    req.body.city ='huntersvill'
  }
  if(!req.body.state){
    req.body.state ='USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

module.exports = router