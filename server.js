const http = require('http')
const dotenv = require('dotenv')
const {connectToMongo} = require('./db/connectToMongoDB')
const {productRoutes} = require('./routes/product.routes'); 


dotenv.config()

const PORT = process.env.PORT ||5000 

const server = http.createServer(productRoutes);

server.listen(PORT, ()=> {
  connectToMongo()
  console.log(`Server runing on port ${PORT}`)})
