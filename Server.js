const dotenv = require('dotenv');
const app = require('./app');
const mongoose = require('mongoose');
dotenv.config({ path: './config.env' });


const DB=process.env.DATABASE

mongoose.connect(DB,{
  useNewUrlParser:"true",
  useCreateIndex:"true",
  useFindAndModify:"false",
  useUnifiedTopology: "true" 

}).then(()=>{
  // console.log(con.connections);
  console.log('DB connection successful');
})
//////// mongoose is a collection of models and models is having blueprint of the documents like class as the object//////
////So new class is used and the model is the wrapper for the schema

// const tourSchema= mongoose.Schema({
   
//   // name:String,
//   name:{
// type:String,                                                                ///////Schema and schema type options   basic type
// required:[true,'A tour name having is must'],                               //////if error is there
// unique:true                                                                   ////
//   },
//   rating:{
//     type:Number,
//     default:4.5
//   },
//   price:{
//     type:Number,
//     required:[true,'A price having is must']
//   }

// })

// const Tour=mongoose.model('Tour',tourSchema)      ///////First letter in uppercase for both variable and the name of the variable to differentiate model from others
                                       

// const testTour=new Tour({                     //////like new keyword class and name of the class tour

//   name:"GAGA",
//   rating:3.8,
//   price:9999
// })
// const testTour=new Tour({
//   name:"the first things",
//   price:555,
//   rating:4.2
// })

// testTour.save().then(doc=>{
//   console.log(doc);
// }).catch(err=>{                                                     ///////////in database the model name is written in plural form automatically

//   console.log("Error has occured 😓",err);
// })




const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
