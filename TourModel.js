const mongoose = require('mongoose');

const tourSchema= mongoose.Schema({
   
  // name:String,
  name:{
type:String,                                                                ///////Schema and schema type options   basic type
required:[true,'A tour name having is must'],                               //////if error is there
unique:true                                                                   ////
  },
  rating:{
    type:Number,
    default:4.5
  },
  price:{
    type:Number,
    required:[true,'A price having is must']
  }

})

const Tour=mongoose.model('Tour',tourSchema)      ///////First letter in uppercase for both variable and the name of the variable to differentiate model from others
           
module.exports=Tour
