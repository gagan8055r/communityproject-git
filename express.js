// const express = require('express');
// const fs = require('fs');
// const app=express()
// const port=3000
// app.get("/",(req,res)=>{
//     res.send("hello this / page")
// })
// app.post("/",(req,res)=>{
//     res.send("hello this is post  page")
// })


// // const tours=JSON.parse(fs.readFile("tours.json",'utf-8'))
// const toursData = fs.readFileSync("tours.json", "utf8");
// const tours = JSON.parse(toursData);

// app.get("/api/v1/tours",(req,res)=>{
//     res.status(200).json({
//         status:"success",
        
//         data:{
//             tours:tours,
//         }
//     })
// })
// app.listen(port,()=>{
//     console.log(`app is listening in the port number ${port} `);
// })

///////////endpoints only contain resources but not the perform any actions on data   /gettour /updatetour to http methods  get-tours update-tours  

///////////////////////////////////
//  GET: Requests data from a specified resource.
// POST: Submits data to be processed to a specified resource.
// PUT: Updates or replaces a specified resource with the request payload.
// PATCH: Partially updates a specified resource with the request payload.
// DELETE: Deletes a specified resource.
// HEAD: Similar to GET but retrieves only the headers of the response, not the actual data.
// OPTIONS: Retrieves the HTTP methods supported by a server for a specified resource.
// TRACE: Echoes back the received request, primarily used for diagnostic purposes.
// CONNECT: Converts the request connection to a transparent TCP/IP tunnel, usually for secure connections through proxies. 



//////   5 steps in creating restful API
// 1.  info having name is resource
// 2. resource added to tail of url
// 3. use http methods to perform action on data
// 4. send json data jsend and enveloping
// 5. stateless restful api : without knowledge of previous input / output  client only should send the state to web server



// const express = require('express');
// const fs = require('fs');
// const path = require('path');
// const app = express();
// const port = 3000;
// app.use(express.json())
// app.get("/", (req, res) => {
//     res.send("hello this / page");
// });

// app.post("/", (req, res) => {
//     res.send("hello this is post page");
// });




// const toursFilePath = path.join('models', 'tours.json')

// const toursD=fs.readFileSync(toursFilePath,'utf-8')
// const tours=JSON.parse(toursD)

// app.get("/api/v1/tours", (req, res) => {
//     res.status(200).json({
//         status: "success",
//         results:tours.length,
//         data: {
//             tours: tours
//         }
//     });
// });


// app.post("/api/v1/tours",(req,res)=>{


// const newId=tours[tours.length-1].id+1
// const newTour=Object.assign({id:newId},req.body)

// tours.push(newTour)

// fs.writeFile(toursFilePath,JSON.stringify(tours),err=>{
//     if(err) throw err
//     res.status(201).json({
//         status:"success",
//         data:{
//             tours:tours
//         }
//     })
// })



// })
// app.listen(port, () => {
//     console.log(`app is listening on port number ${port}`);
// });
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;
app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("hello this / page");
// });

// app.post("/", (req, res) => {
//     res.send("hello this is post page");
// });

// const toursFilePath = path.join('models', 'tours.json');
// const toursD = fs.readFileSync(toursFilePath, 'utf-8');
// const tours = JSON.parse(toursD);
// const tours=fs.readFileSync(toursFilePath, 'utf-8');

// const toursFilePath = path.join('models', 'tours.json');

// let tours = []; // Initialize an empty array as a placeholder for tours data


// try {
//     const toursData = fs.readFileSync(toursFilePath, 'utf-8');
//     tours = JSON.parse(toursData);
// } catch (error) {
//     console.error("Error reading tours file:", error);
// }
const toursFilePath = path.join('models', 'tours.json');
const toursD = fs.readFileSync(toursFilePath, 'utf-8');
const tours = JSON.parse(toursD);
app.get("/api/v1/tours", (req, res) => {
    res.status(200).json({
        status: "success",
        results: tours.length,
        data: {
            tours: tours
        }
    });
});
app.get("/api/v1/tours/:id", (req, res) => {                                    ////////////if we give question mark we can default them

    const id=Number(req.params.id)
   if(id>tours.length)
   {
    return  res.status(404).json(
        {
            status:"fail",
            message:"please enter the valid id"
        }
    );
   }
 
    const tour=tours.find(ele=>ele.id===id)
 
    res.status(200).json(
        {
            status:"success",
            data:{
                tour
            }
        }
    );
});

app.post("/api/v1/tours", (req, res) => {
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body);

    tours.push(newTour);

    fs.writeFile(toursFilePath, JSON.stringify(tours), err => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                status: "error",
                message: "Could not save tour data.",
            });
        }

        res.status(201).json({
            status: "success",
            data: {
                tour: newTour
            }
        });
    });
});

app.listen(port, () => {
    console.log(`app is listening on port number ${port}`);
});


//////////////req(object) parameter in the post method will be having the data that is sent from client to the server  so it will use the middleware to get the data in the data sending part 
