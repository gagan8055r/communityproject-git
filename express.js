const express = require('express');

const app=express()
const port=3000
app.get("/",(req,res)=>{
    res.send("hello this / page")
})
app.post("/",(req,res)=>{
    res.send("hello this is post  page")
})


app.listen(port,()=>{
    console.log(`app is listening in the port number ${port} `);
})


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
