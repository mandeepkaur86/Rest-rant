const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: {type: String,default: 'http://placeKitten.com/350/350'},
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: {
   type: Number,
   min:[1673,'Surely not that old?!'],
   max:[new Date().getFullYear(),'hey,this year is in thr future']
 },
   comments:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}] 
})

placeSchema.methods.showEstablished = function(){
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

module.exports = mongoose.model('Place', placeSchema)
