const router = require('express').Router()
const places =require('../models/places')

//GET NEWPLACES PAGE
router.get('/new', (req, res) => {
  res.render('places/new')
})
 //GET lists places
 router.get('/',(req,res) =>{
 res.render('places/index',{places})
})

//GET PLACE DETAIL BY INDEX
router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show',{place:places[id] ,id})
  }
})

//GET EDIT PLACES FORM
router.get('/:id/edit',(req,res)=>{
  const id = Number(req.params.id)
  if(isNaN(id)){
    res.render('error404')
  }
  else if (!places[id]){
    res.render('erroe404')
  }
  else{
    res.render('places/edit',{place:places[id], id})
  } 
})

//POST CREATE NEW PLACE
router.post('/',(req,res) =>{
  
  if(!req.body.pic){
    //defalute image if one is not provider
    req.body.pic ='http://placekitten.com/400/400'
  }
  if(!req.body.city){
    req.body.city ='Anytown'
  }
  if(!req.body.state){
    req.body.state ='USA'
  }
  places.push(req.body)
  res.redirect('/places')
})
//delete places
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})
//PUT 
router.put('/:id',(req,res)=>{
  const id = Number(req.params.id)
  if(isNaN(id)){
    res.render('error404')
  }
  else if(!places[id]){
    res.render('error404')
  }
  else{
    //req.body and make sure data is valid
    if(!req.body.pic){
      req.body.pic ='http://placekitten.com/400/400'
    }
    if(!req.body.city){
      req.body.city ='Anytown'
    }
    if(!req.body.state){
      req.body.state ='USA'
    }
    //SAVE THE DATE NEW DATA 
    places[id] = req.body
    res.status(303).redirect(`/places/${id}`)
  }
})

module.exports = router