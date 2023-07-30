
// const { error } = require('console');

const fs = require('fs');
const http = require('http');


const server=http.createServer()
server.on('request',(req,res)=>{
    
//     //     fs.readFile('taste.txt',(data,err)=>{
        
        
//         //     res.end(data)
        
//         // })
        const readfile=fs.createReadStream('taste.txt')
        readfile.on("data",chunk=>{

            res.write(chunk)
        })

        readfile.on("error",(err)=>{
            console.log(err);
            // console.log(req.url);
            res.end("error reading file")
        })
        readfile.on('end',()=>{
            res.end()
        })
                })

        

server.listen('3000','127.0.0.1',()=>{
    console.log("the server is ruuning on port number 3000");
})


const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  const readfile = fs.createReadStream('text.txt');
  
  // Set the appropriate Content-Type header for the response
  res.setHeader('Content-Type', 'text/plain');

  readfile.on("data", chunk => {
    res.write(chunk);
  });

  readfile.on('end', () => {
    res.end();
  });

  readfile.on('error', (err) => {
    console.error('Error reading file:', err);
    res.statusCode = 500; // Internal Server Error
    res.end('Error reading file');
  });
});

server.listen(3000, '127.0.0.1', () => {
  console.log("The server is running on port number 3000");
});
