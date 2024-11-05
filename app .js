const http = require('http');
const { json } = require('stream/consumers');

const HOSTNAME = 'localhost'
const PORT = 9000

const server = http.createServer((req,res) => {
    if (req.url.startsWith('/tasks')) {
        taskRoutes(req, res)
    } else {
        res.writeHead(404, 'Not found',{'countant-type': 'application/json'})
        res.end (json.stringfy ({
          message: 'Sorry, you  got'  
        }))
    }
});

server.listen(PORT,HOSTNAME, () =>{
    console.log(`Server runting on port ${PORT}`)
})