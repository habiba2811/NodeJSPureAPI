const http = require('http')

const server =http.createServer((req,res ) => {
 res.statusCode =200
 res.setHeader('Content-Type','test/html')
 res.write('<h1>Hello</h1>')
 res.end();
})
const PORT = process.env.PORT ||5000 
server.listen(PORT, ()=> console.log("runing on port:",PORT))
