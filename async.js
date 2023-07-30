
const fs = require('fs').promises
const { rejects } = require('assert');
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
        // console.log(data1);
    })
    console.log(`Breed:${data}`);
    
    const res=await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
    console.log(res.body);
    // console.log(res.body.message);
    
    await fs.writeFile('dog.txt',res.body.message)
    console.log("successfully updated");

}
catch(err)
{
    console.log(err);
}



}


getDogpic()

