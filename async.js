
const fs = require('fs').promises
const { rejects } = require('assert');
const { promises } = require('dns');
const { resolve } = require('path');
const superagent = require('superagent');

// fs.writeFile("text.txt","beagle",()=>{
//     console.log("written successfully");
// })

// fs.readFile('text.txt',(err,data)=>{
//    if(data)
//    {

//        console.log(`Breed:${data}`);
//    }
//    else
//    {
//     console.log("file not found");
//    }
   // .end((err,res)=>{
       
       //         console.log(res.body);
       
       //     })
    //    superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
    //    .then(res=>{
    //     console.log(res.body);
    //    })

    //    .catch(err=>{

    //        console.log(err.message);
    //    })
       
       

   
// })

// The await keyword can only be used inside an async function. While getDogpic is an async function, the usage of fs.readFile is not correct. fs.readFile uses a callback-based approach, and you cannot directly await its result. Instead, you should use a promise-based version or utilize the fs.promises API.
// use fs. promises will directly getting results from the fs file or promises is required

// const readFilePro=file=>{
//     return new Promise((resolve,rejects)=>{
//         fs.readFile(file,(err,data)=>{
//             if(err) rejects(err)
//             resolve(data)
//         })
//     })
// }
const getDogpic=async()=>{
try
{
    
    const data= await fs.readFile('text.txt',(err,data1)=>{
      
    })
    console.log(`Breed:${data}`);
    
    const res1=await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
    // console.log(res1.body);
    const res2=await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
    // console.log(res2.body);
    const res3=await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
    // console.log(res3.body);

    const all=await Promise.all([res1,res2,res3])
    const imgs=all.map(el=>el.body
        
    )
   console.log(imgs);
    // console.log(res.body.message);
    
    await fs.writeFile('dog.txt',imgs.join())
    console.log("successfully updated");

    return console.log("ready function");

}
catch(err)
{
    console.log("there is an error");
    console.log(err);
}



}


(async ()=>{
    try{
    console.log('at first');
   const x= await getDogpic()
    console.log("at second");
    }
    catch(err)
    {
        console.log("there is an error");
        console.log(err);
    }
})()
// console.log("before");
// const x=getDogpic().then( x=>{

//     console.log(x);
// })                      ..promises work like this it will perform all the activities below that inside of stopping 
// .catch(err=>{
//     console.log("error occured");
// })

//                          //This line says that async function automatically returns 
// console.log("after");

