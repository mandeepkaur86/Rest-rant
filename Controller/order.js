const { Router } = require('express')

const router = require('express').Router()


router.get('/',(req,res) => {
    res.send(`<h1>hi,there</h1>`)
})


router.get('/Appetizer',(req,res) => {
    res.send(`<h1>Bhelpuri</h1>`)
})
module.exports = router;