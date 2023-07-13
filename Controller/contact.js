
const router = require('express').Router()


router.get('/',(req,res) => {
    res.send('<h1>phone number</h1>')
})


router.get('/Address',(req,res) => {
    res.send(`<h1>1235 S170 lane,seatac,WA</h1>`)
})
module.exports = router;