
const { getProducts ,getProduct, createProduct, updateProduct,deleteProduct} = require('../controllers/product.controller')

const productRoutes =(req,res ) => {
    console.log(`Received request: ${req.method} ${req.url}`); // Debugging log
    if (req.url === '/api/products' && req.method === 'GET') {
        getProducts(req, res);
      } else if (req.url.match(/\/api\/products\/\w+/) && req.method === 'GET') {
        const id = req.url.split('/')[3];
        getProduct(req, res, id);
      } else if (req.url === '/api/products' && req.method === 'POST') {
        createProduct(req, res);
      } else if (req.url.match(/\/api\/products\/\w+/) && req.method === 'PUT') {
        const id = req.url.split('/')[3];
        updateProduct(req, res, id);
      } else if (req.url.match(/\/api\/products\/\w+/) && req.method === 'DELETE') {
        const id = req.url.split('/')[3];
        deleteProduct(req, res, id);
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(
          JSON.stringify({
            message: 'Route Not Found: Please use the api/products endpoint',
          })
        );
      }

}

module.exports ={ productRoutes }